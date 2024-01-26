/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/linkedin.com.in.samarth/1002",
        destination: "https://www.linkedin.com/in/samarth1002",
        permanent: true,
      },
      {
        source: "/github.com/SamarthanandKamble",
        destination: "https://www.github.com/SamarthanandKamble",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/SamarthanandK",
        permanent: true,
      },
      {
        source: "/insta",
        destination: "https://twitter.com/SamarthanandK",
        permanent: true,
      },
      {
        source: "/bingeyoutube.vercel.app",
        destination: "https://bingeyoutube.vercel.app/",
        permanent: true,
      },
      {
        source: "/github.com/SamarthanandKamble/YoutubeClone",
        destination: "https://github.com/SamarthanandKamble/YoutubeClone",
        permanent: true,
      },
      {
        source: "/letthechathappen.vercel.app",
        destination: "https://letthechathappen.vercel.app/",
        permanent: true,
      },
      {
        source: "/github.com/SamarthanandKamble/ChatApp",
        destination: "https://github.com/SamarthanandKamble/ChatApp",
        permanent: true,
      },
      {
        source: "/github.com/SamarthanandKamble/NetflixClone",
        destination: "https://github.com/SamarthanandKamble/Netflix-Clone",
        permanent: true,
      },
      {
        source: "/netflixclone.vercel.app",
        destination: "/",
        permanent: true,
      },
      {
        source: "/calorifit.netlify.app",
        destination: "https://caloriefit.netlify.app",
        permanent: true,
      },
      {
        source: "/github.com/SamarthanandKamble/CalorieFit",
        destination: "https://github.com/SamarthanandKamble",
        permanent: true,
      },
      {
        source: "/giphytalks.netlify.app",
        destination: "https://giphytalks.netlify.app/",
        permanent: true,
      },
      {
        source: "/github.com/SamarthanandKamble/GiphyTalks",
        destination: "https://github.com/SamarthanandKamble",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
