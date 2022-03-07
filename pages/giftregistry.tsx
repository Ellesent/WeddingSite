import styles from "../styles/giftregistry.module.css";

const GiftRegistry = () => {
  return (
    <div className="m-5 p-10 flex items-center align-center justify-start flex-col h-full" id='giftregistry'>
      <a
        href="https://www.crateandbarrel.com/gift-registry/francesca-pate-rinaldi-and-dominic-valenciana/r6446476"
        target="_blank"
        className={`m-5 text-4xl underline lg:no-underline lg:hover:underline lg:transition lg:duration-500 lg:ease-in-out lg:transform lg:hover:-translate-y-1 lg:hover:scale-110`}
      >
        Crate and Barrel Gift Registry
      </a>
    </div>
  );
};

export default GiftRegistry;
