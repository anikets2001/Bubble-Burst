import logo from "../assets/Images/logo.png";
const HeroSection = () => {
  return (
    <>
      <div className="bg-fuchsia-50  flex  h-screen items-center justify-center">
        <div>
          <img className="h-full w-full" src={logo} alt="logo" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
