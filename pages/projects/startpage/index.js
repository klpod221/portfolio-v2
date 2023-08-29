import AnalogueClock from "../../../components/startpage/AnalogueClock";
import RandomBackground from "../../../components/RandomBackground";

const StartPage = () => {
  return (
    <RandomBackground>
      <div className="flex flex-col items-center justify-center h-screen">
        <AnalogueClock />
      </div>
    </RandomBackground>
  );
};

export default StartPage;
