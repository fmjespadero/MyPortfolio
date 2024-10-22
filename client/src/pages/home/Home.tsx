import { Card } from "../../components/card";
import { Icon } from "../../components/Icon";
import { Link } from "react-router-dom";
import { data } from "../../constants/data";
import { Image } from "../../components/image";
import IOL from "../../assets/images/IOL.jpg";
import UPANG from "../../assets/images/UPANG.png";
import Tesda from "../../assets/images/Tesda.png";
const Home = () => {
  return (
    <section className="grid grid-cols-12 gap-3">
      <section className="space-y-3 col-span-full lg:col-span-4">
        <Card>
          <h2 className="font-medium capitalize">{data.intro.title}</h2>
          <p className="text-sm font-light text-center">{data.intro.bio}</p>
          <hr className="border-t border-[#3e4042]" />
          <div>
            <ul className="space-y-2">
              {data.intro.socials.map(({ icon, label, link }, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Icon className="text-[24px] text-[#8C939D]" icon={icon} />
                  <Link
                    className="text-[#59A6FD] text-[14px]"
                    to={link}
                    target="_blank"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Card>

        <Card>
          <h2 className="font-medium capitalize">Skills</h2>
          <ul className="">
            {data.skills.skills.map(({ icon, label }, index) => (
              <li
                key={index}
                className="flex items-center gap-3 border-b border-b-[#3e4042] last:border-0 py-2"
              >
                <Icon className="text-[24px] text-[#8C939D]" icon={icon} />
                <div className="text-[14px] font-medium">
                  <span>{label}</span>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="space-y-3 col-span-full lg:col-span-8">
        <Card>
          <h2 className="font-medium capitalize">{data.about.title}</h2>
          <p className="text-sm font-light">{data.about.about}</p>
        </Card>

        <Card>
          <h2 className="font-medium">Experience</h2>
          <div className="flex gap-4">
            <Image className="size-[50px]" src={IOL} alt="IOL Image" />
            <div className="flex flex-col flex-1 gap-1">
              <div className="flex flex-col">
                <h3 className="font-medium">Frontend Developer</h3>
                <span className="text-sm font-light">
                  IOL Inc. · Internship
                </span>
                <span className="text-sm font-light text-[#E4E6EB]/60">
                  Jan 2024 - Apr 2024 · 4 mos
                </span>
                <span className="text-sm font-light text-[#E4E6EB]/60">
                  Baguio City, Cordillera Admin Region, Philippines · Hybrid
                </span>
              </div>
              <ul className="pl-6 text-sm list-disc">
                <li>
                  Collaborated with the development team to design and implement
                  responsive web applications, ensuring optimal performance
                  across various devices and screen sizes.
                </li>
                <li>
                  Conducted debugging and troubleshooting to identify and
                  resolve frontend issues, enhancing application reliability.
                </li>
                <li>
                  Assisted in user testing sessions to identify areas for
                  improvement and enhance the application.
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="font-medium">Education</h2>
          <div className="flex gap-4">
            <Image className="size-[50px]" src={UPANG} alt="UPANG Image" />
            <div className="flex flex-col flex-1 gap-1">
              <div className="flex flex-col">
                <h3 className="font-medium">University of Pangasinan</h3>
                <span className="text-sm font-light">
                  Bachelor of Science in Information Technology
                </span>
                <span className="text-sm font-light text-[#E4E6EB]/60">
                  Specializing in Web Development
                </span>
                <span className="text-sm font-light text-[#E4E6EB]/60">
                  Mar 2020 - Jun 2024
                </span>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="font-medium">Licenses & Certifications</h2>
          <div className="flex gap-4">
            <Image className="size-[50px]" src={Tesda} alt="Tesda Image" />
            <div className="flex flex-col flex-1 gap-1">
              <div className="flex flex-col">
                <h3 className="font-medium">
                  National Certificate II – Computer Systems Servicing
                </h3>
                <span className="text-sm font-light">TESDA</span>
                <span className="text-sm font-light text-[#E4E6EB]/60">
                  Issued Dec 2019
                </span>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </section>
  );
};

export default Home;
