export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/974404943383511080/1010766281529639023/gbot.jpg",
      name: "G Shop and Bot",
      description:
        "hi i am stix, i have been working on a project for a long time and i decided to bring this project to life. The Gbot system project is now waiting for everyone with you!",
      link: "https://discord.gg/GRkYArtwrk",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/974404943383511080/1010767072520839248/YouTube_full-color_icon_2017.png",
      name: "Youtube",
      description:
        "hi I am a professional discord and Fivem and middleware developer. I have been professionally involved in community management and development for 2 years and have high-level knowledge and experience in areas such as community management and social media management. I share videos about Fivem on my youtube channel.",
      link: "https://www.youtube.com/channel/UCeRG7MNmVQPcW3XSKpDoaTg/featured",
    },
     {
      id: 3,
      image: "https://cdn.discordapp.com/attachments/974404943383511080/1010767468840620042/PentagoneRocket.png",
      name: "G Community",
      description:
        "Don't forget to join our community server!",
      link: "https://discord.gg/NxWjyM8m3P",
    }
  ];
  res.status(200).json(data);
};
