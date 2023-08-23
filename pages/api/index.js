// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    name: "klpod221",
    email: "klpod221@gmail.com",
    website: "https://klpod221.github.io",
    socials: [
      {
        name: "github",
        url: "https://github.com/klpod221",
      },
      {
        name: "facebook",
        url: "https://www.facebook.com/klpod221",
      },
      {
        name: "twitch",
        url: "https://www.twitch.tv/klpod221",
      },
    ],
  });;
}
