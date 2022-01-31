import { useEffect, useState } from "react";
import { Guest, Status } from "../utils/Types";
import { IconButton } from "./IconButton";
import router, { useRouter } from "next/router";

interface Props {
  list: Guest[];
}

const GuestListItems = (props: Props) => {
  const [error, setError] = useState("");
  const [guestIdEdit, setGuestIDEdit] = useState("");

  const [updateProps, setUpdateProps] = useState({});

  const router = useRouter();

  const deleteOnClickHandler = async (guestID: string) => {
    setError("");
    try {
      const response = await fetch(`/api/guests/${guestID}`, {
        method: "DELETE",
      });
      const jsonResponse = await response.json();

      if (!response.ok) {
        const error = `Error deleting guest: ${response.status}, ${response.statusText}`;
        console.error(error);
        setError(error);
        return;
      }
      // reload page if delete successful
      router.reload();
    } catch (e) {
      const error = `Error deleting guest. ${e} `;
      console.error(error);
      setError(error);
    }
  };

  const EditOnClickHandler = async (guestID: string) => {
    setGuestIDEdit(guestID);
  };

  const EditOnConfirmHandler = async (guestID: string) => {
    const response = await fetch(`/api/guests/${guestID}`, {
      method: "PUT",
      body: JSON.stringify(updateProps),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const responseJSON = await response.json();

    console.log(responseJSON);

    if (!response.ok) {
      const error = `Error updating guest: ${response.status}, ${response.statusText}`;
      console.error(error);
      setError(error);
      return;
    }
    // reload page if update successful
    router.reload();
  };

  const EditOnCancelHandler = async (guestID: string) => {
    setGuestIDEdit("");
    setUpdateProps({});
  };

  return (
    <>
      {props.list?.map((guest) => (
        <div
          className="table-row divide-x border-b text-center"
          key={guest.name + guest.email + guest.id}
        >
          {guest.id != guestIdEdit ? (
            <>
              <a className="table-cell">
                <IconButton
                  iconClassName="fas fa-edit"
                  onClick={EditOnClickHandler}
                  guestId={guest.id ? guest.id : ""}
                />
                <IconButton
                  iconClassName="fas fa-trash"
                  onClick={deleteOnClickHandler}
                  guestId={guest.id ? guest.id : ""}
                />
                {guest.name}
              </a>
              <a className="table-cell">{guest.numInParty}</a>
              <a className="table-cell">{guest.email}</a>
              <a className="table-cell">{guest.address}</a>
              <a className="table-cell">
                {Status[guest.status]?.replaceAll("_", " ")}
              </a>
              <a className="table-cell">{`${window.location.hostname}/rsvp/${guest.id}`}</a>
              <a className="table-cell">{guest.foodAllergies}</a>
            </>
          ) : (
            <>
              <a className="table-cell">
                <IconButton
                  iconClassName="fas fa-check-circle"
                  guestId={guest.id ? guest.id : ""}
                  onClick={EditOnConfirmHandler}
                />
                <IconButton
                  iconClassName="fas fa-times-circle"
                  guestId={guest.id ? guest.id : ""}
                  onClick={EditOnCancelHandler}
                />
                {guest.name}
              </a>
              <a className="table-cell">
                <input
                  className="text-center"
                  type="number"
                  defaultValue={guest.numInParty}
                  onChange={(e) =>
                    setUpdateProps({
                      ...updateProps,
                      numInParty: e.target.value,
                    })
                  }
                />
              </a>
              <a className="table-cell">
                <input
                  className="text-center"
                  type="email"
                  defaultValue={guest.email}
                  onChange={(e) =>
                    setUpdateProps({
                      ...updateProps,
                      email: e.target.value,
                    })
                  }
                  
                />
              </a>
              <a className="table-cell">
                <input className="text-center" defaultValue={guest.address}  onChange={(e) =>
                    setUpdateProps({
                      ...updateProps,
                      address: e.target.value,
                    })
                  } />
              </a>
              <a className="table-cell text-center">
                {Status[guest.status]?.replaceAll("_", " ")}
              </a>
              <a className="table-cell text-center">{`${window.location.hostname}/rsvp/${guest.id}`}</a>
              <a className="table-cell">
                <input
                  className="text-center"
                  defaultValue={guest.foodAllergies}
                  onChange={(e) =>
                    setUpdateProps({
                      ...updateProps,
                      foodAllergies: e.target.value,
                    })
                  }
                />
              </a>
            </>
          )}
        </div>
      ))}
      {error && <span>{error}</span>}
    </>
  );
};

const GuestList = () => {
  const [guestList, setGuestList] = useState<Guest[]>();

  // get the list of guests from the db on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/guests", { method: "GET" });
        const jsonResponse = await response.json();
        setGuestList(jsonResponse);
      } catch (e) {
        console.error(
          `Something went wrong querying for the guest list. Error is ${e}`
        );
        setGuestList([]);
      }
    };

    fetchData();
  }, []);
  const headers = [
    "Name",
    "# in Party",
    "Email",
    "Address",
    "Status",
    "RSVP URL",
    "Food Allergies",
  ];

 const numPartiesAccepted = guestList?.filter(guest => guest.status === Status.RSVPed);
 let numPeopleAccepted: number = 0;

 numPartiesAccepted?.forEach(guest => numPeopleAccepted +=  typeof guest.numInParty == 'string' ? parseInt(guest.numInParty) : guest.numInParty);
  return (
    // guest list table
    <>
    <div className={`justify-self-stretch table bg-rose-500 m-5 border-collapse`}>
      <div className="table-row-group">
        <div className="table-row headers divide-x border-b text-center">
          {headers.map((header) => (
            <a key={header} className="table-cell">
              {header}
            </a>
          ))}
        </div>
        <GuestListItems list={guestList} />
      </div>
    </div>
    <div className='flex flex-row justify-evenly m-5'>
    <span className='text-xl'>{`Number of Parties Accepted: ${numPartiesAccepted?.length}`}</span>
    <span className='text-xl'>{`Number of People Accepted: ${numPeopleAccepted}`}</span>
    <span  className='text-xl'>{`Number of Parties Declined: ${guestList?.filter(guest => guest.status === Status.Declined).length}`}</span>
    </div>
    </>
  );
};

export { GuestList };
