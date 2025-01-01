export default {
    apps: [
      {
        name: "rmc",
        script: ".output/server/index.mjs",
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
  