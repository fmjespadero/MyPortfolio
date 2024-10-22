import { Outlet } from "react-router-dom";
import { Icon } from "../components/Icon";
import { CoverImage } from "./components/coverImage";
import Profile from "../assets/images/Profile.jpg";
import { Navbar } from "./components/navbar";
import { Button } from "../components/button";
import { Image } from "../components/image";
import { Divider } from "../components/divider";
import { EditProfile } from "./components/editProfile";
const Layout = () => {
  return (
    <>
      <section className="bg-[#242526]">
        <CoverImage />
        <div className="mt-[-80px] max-w-screen-xl mx-auto px-4 space-y-1">
          <div className="flex flex-col items-center py-2 md:flex-row md:items-end md:gap-3">
            <Image
              className="size-[150px] rounded-full border-[5px] border-[#242526]"
              src={Profile}
              alt="Profile Image"
            />
            <div className="flex flex-col items-center justify-between flex-1 gap-3 md:flex-row">
              <div className="text-[#E4E6EB] text-center md:text-start">
                <h1 className="text-3xl font-bold">Mark Jefferson Fernandez</h1>
                <span className="font-light">Web Developer</span>
              </div>
              <div className="flex gap-3 ">
                <Button className="text-sm">
                  <Icon width={20} height={20} icon="mingcute:messenger-fill" />
                  Contact
                </Button>
                <EditProfile />
              </div>
            </div>
          </div>
          <Divider />
          <Navbar />
        </div>
      </section>
      <main className="max-w-screen-xl py-3 mx-auto px-[clamp(12px,_4vw,_48px)] lg:px-3">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
