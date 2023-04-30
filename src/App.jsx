// import ImageSlider from "./components/ImageSlider.jsx";
import Catalogue from "./components/Catalogue";
import laddakh from "./assets/laddakh.jpg";
import photography from "./assets/photography.jpg";
import Roses from "./assets/Roses.jpg";
import waterfall from "./assets/water-fall.jpg";
import italy from "./assets/italy.jpg";
import { Box, Stack, Typography } from "@mui/material";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import { useEffect, useState } from "react";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex) => {
          const isLastSlide = currentIndex === slides.length - 1;
          const newIndex = isLastSlide ? 0 : currentIndex + 1;
          return newIndex;
        });
      }, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isPlaying, currentIndex]);

  const slides = [
    {
      url: laddakh,
      title: "Laddakh",
      details:
        "Ladakh is a region administered by India as a union territory[1] which constitutes a part of the larger Kashmir region and has been the subject of dispute between India, Pakistan, and China since 1947.[2][3] Ladakh is bordered by the Tibet Autonomous Region to the east, the Indian state of Himachal Pradesh to the south, both the Indian-administered union territory of Jammu and Kashmir and the Pakistan-administered Gilgit-Baltistan to the west, and the southwest corner of Xinjiang across the Karakoram Pass in the far north. It extends from the Siachen Glacier in the Karakoram range to the north to the main Great Himalayas to the south.[12][13] The eastern end, consisting of the uninhabited Aksai Chin plains, is claimed by the Indian Government as part of Ladakh, and has been under Chinese control since",
    },
    {
      url: photography,
      title: "Photography",
      details:
        "There are many ongoing questions about different aspects of photography. In her On Photography (1977), Susan Sontag dismisses the objectivity of photography. This is a highly debated subject within the photographic community.[64] Sontag argues, To photograph is to appropriate the thing photographed. It means putting one's self into a certain relation to the world that feels like knowledge, and therefore like power. Photographers decide what to take a photo of, what elements to exclude and what angle to frame the photo, and these factors may reflect a particular socio-historical context. Along these lines, it can be argued that photography is a subjective form of representation.",
    },
    {
      url: Roses,
      title: "Roses",
      details:
        "The long cultural history of the rose has led to it being used often as a symbol. In ancient Greece, the rose was closely associated with the goddess Aphrodite.[27][28] In the Iliad, Aphrodite protects the body of Hector using the immortal oil of the rose and the archaic Greek lyric poet Ibycus praises a beautiful youth saying that Aphrodite nursed him among rose blossoms.[30][27] The second-century AD Greek travel writer Pausanias associates the rose with the story of Adonis and states that the rose is red because Aphrodite wounded herself on one of its thorns and stained the flower red with her blood.[31][27] Book Eleven of the ancient Roman novel The Golden Ass by Apuleius contains a scene in which the goddess Isis, who is identified with Venus, instructs the main character, Lucius, who has been transformed into a donkey, to eat rose petals from a crown of roses worn by a priest as part of a religious procession in order to regain his humanity.",
    },
    {
      url: waterfall,
      title: "Water Fall",
      details:
        "A waterfall is a point in a river or stream where water flows over a vertical drop or a series of steep drops. Waterfalls also occur where meltwater drops over the edge of a tabular iceberg or ice shelf.Waterfalls can be formed in several ways, but the most common method of formation is that a river courses over a top layer of resistant bedrock before falling on to softer rock, which erodes faster, leading to an increasingly high fall. Waterfalls have been studied for their impact on species living in and around them.Humans have had a distinct relationship with waterfalls for years, travelling to see them, exploring and naming them. They can present formidable barriers to navigation along rivers. Waterfalls are religious sites in many cultures. Since the 18th century they have received increased attention as tourist destinations, sources of hydropower, and—particularly since the mid-20th century—as subjects of research.",
    },
    {
      url: italy,
      title: "Italy",
      details:
        "Italy is a country located in southern Europe, known for its rich history, stunning art, and delicious cuisine. Italy is home to world-famous cities like Rome, Florence, and Venice, each with its own unique character and attractions. The country is also renowned for its picturesque landscapes, including the stunning Amalfi Coast, the rolling hills of Tuscany, and the snow-capped peaks of the Italian Alps.Italy is a country located in southern Europe, known for its rich history, stunning art, and delicious cuisine. Italy is home to world-famous cities like Rome, Florence, and Venice, each with its own unique character and attractions. The country is also renowned for its picturesque landscapes, including the stunning Amalfi Coast, the rolling hills of Tuscany, and the snow-capped peaks of the Italian Alps.Italy is a country located in southern Europe, known for its rich history, stunning art, and delicious cuisine. Italy is home to world-famous cities like Rome, Florence, and Venice, each with its own unique character and attractions. The country is also renowned for its picturesque landscapes, including the stunning Amalfi Coast, the rolling hills of Tuscany, and the snow-capped peaks of the Italian Alps.",
    },
  ];

  return (
    <Box p={2}>
      <Typography
        variant="h2"
        gutterBottom="true"
        sx={{ textAlign: "center", fontFamily: "fantasy", color: "#63aeff" }}
      >
        Catalogue Viewer
      </Typography>
      <Stack
        direction={{ md: "row" }}
        sx={{
          width: { md: "800px", lg: "1024px" },
          height: "80vh",
          margin: "auto",
        }}
      >
        <Catalogue
          slides={slides}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Stack p={{ sm: "0", md: "1rem" }}>
          <Box>
            <Typography variant="h4" sx={{ color: "GrayText" }}>
              {slides[currentIndex].title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                width: { md: "360px", lg: "410px" },
                height: { md: "340px", lg: "305px" },
                lineHeight: "0.9rem",
                color: "grey",
              }}
            >
              {slides[currentIndex].details}
            </Typography>
            <Stack alignItems="center" sx={{ mt: "25px" }}>
              {isPlaying ? (
                <PauseCircleIcon
                  sx={{ color: "#63aeff", fontSize: "3rem" }}
                  onClick={() => setIsPlaying(false)}
                />
              ) : (
                <PlayCircleFilledWhiteIcon
                  sx={{ color: "#63aeff", fontSize: "3rem" }}
                  onClick={() => setIsPlaying(true)}
                />
              )}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default App;
