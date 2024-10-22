import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import { Icon } from "@/components/Icon";
import { Image } from "@/components/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Profile from "../../assets/images/Profile.jpg";
export const EditProfile = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="text-sm">
          <Icon width={20} height={20} icon="ic:round-edit" />
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#242526] outline-none max-w-screen-md border-none gap-3">
        <DialogHeader>
          <DialogTitle className="text-lg text-center">
            Edit Profile
          </DialogTitle>
        </DialogHeader>
        <Divider />
        <section className="space-y-3">
          <div className="space-y-3">
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle>Profile picture</DialogTitle>
              <button className="text-[#59A6FD]">Edit</button>
            </DialogHeader>
            <Image
              className="size-[150px] rounded-full mx-auto"
              src={Profile}
              alt="Profile Image"
            />
          </div>

          <div className="space-y-3">
            <DialogHeader className="flex flex-row items-center justify-between">
              <DialogTitle>Profile picture</DialogTitle>
              <button className="text-[#59A6FD]">Edit</button>
            </DialogHeader>
            <div className="aspect-i"></div>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  );
};
