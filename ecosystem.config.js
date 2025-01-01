export default {
    apps: [
      {
        name: "rmc",
        script: "pm2 start /home/ramadanchallenge/ramadan_vuejs/.output/server/index.mjs --name rmc",
        instances: "max",
        exec_mode: "cluster",
        env: {
          NODE_ENV: "production",
          PORT: 3000,
          HOST: "0.0.0.0",  
        },
      },
    ],
  };
  