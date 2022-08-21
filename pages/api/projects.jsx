export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://cdn.discordapp.com/attachments/974404943383511080/1010762500591063090/20220818_225138_0000-1.png",
      name: "G Shop",
      description:
        "Botlarımız ile ilgili discorda gelmeyi unutmayın.",
      link: "https://discord.gg/GRkYArtwrk",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/974404943383511080/1010762500591063090/20220818_225138_0000-1.png",
      name: "Youtube",
      description:
        "hi I am a professional discord and Fivem and middleware developer. I have been professionally involved in community management and development for 2 years and have high-level knowledge and experience in areas such as community management and social media management. I share videos about Fivem on my youtube channel.",
      link: "https://www.youtube.com/channel/UCeRG7MNmVQPcW3XSKpDoaTg/featured",
    },
     {
      id: 3,
      image: "https://cdn.discordapp.com/attachments/974404943383511080/1010765210384085114/gbot.png",
      name: "Ghood",
      description:
        "Ekip Discordumuza Herkesi Bekliyoruz.",
      link: "https://discord.gg/NxWjyM8m3P",
    }
  ];
  res.status(200).json(data);
};
