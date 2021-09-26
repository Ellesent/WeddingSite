module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Important: return the modified config
      config.module.rules.push( {
            test: /\.html$/i,
            loader: 'html-loader',
            options: {
                
            }
          });

            
      return config
    },
    env: {
      EMAIL: 'noreply@caseyandtomgetmarried.com'
    }
  }