const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 w-full border-b border-gray-200 bg-white/50 backdrop-blur-xl z-30 transition-all">
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <a className="flex items-center font-display text-2xl" href="/">
            <img
              alt="NostalgicFriends logo"
              src={"https://nostalgicfriends.gq/Images/Logo_2.png"}
              width="30"
              height="30"
              decoding="async"
              data-nimg="1"
              className="mr-2 rounded-sm"
              loading="lazy"
              style={{ color: "transparent" }}
            />
            <p>Nostalgic Friends</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;