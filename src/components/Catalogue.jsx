import { Card, CardMedia, Stack } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
const ImageSlider = ({ slides, currentIndex, setCurrentIndex }) => {
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Stack p={2} sx={{ width: { md: "400px", lg: "700px" }, height: "450px" }}>
      <Card
        sx={{
          width: { sm: "400px", lg: "650px" },
          height: { xs: "170px", md: "300px", lg: "600px" },
          margin: "auto",
        }}
      >
        <CardMedia
          component="img"
          image={slides[currentIndex].url}
          alt={slides[currentIndex].title}
        />
      </Card>
      <Stack
        direction="row"
        gap={1}
        justifyContent="center"
        alignItems="center"
        sx={{ mt: "15px" }}
      >
        <ArrowLeftIcon
          fontSize="large"
          onClick={goToPrevious}
          sx={{ cursor: "pointer" }}
        />
        {slides.map((slide, slideIndex) => (
          <Card key={slideIndex} onClick={() => goToSlide(slideIndex)}>
            <CardMedia
              component="img"
              image={slide.url}
              alt={slide.title}
              sx={{
                cursor: "pointer",
                width: { xs: "70px", lg: "100px" },
                height: { xs: "70px", lg: "100px" },
                filter:
                  slideIndex === currentIndex
                    ? "grayscale(0%)"
                    : "grayscale(100%)",
              }}
            />
          </Card>
        ))}
        <ArrowRightIcon
          fontSize="large"
          onClick={goToNext}
          sx={{ cursor: "pointer" }}
        />
      </Stack>
    </Stack>
  );
};

export default ImageSlider;
