import Card from "./Card";
import Phone from "./SvgComponents/Phone";
import Email from "./SvgComponents/Email";
import Location from "./SvgComponents/Location";

const ContactUs = () => {
  return (
    <Card>
      <p className="font-bold">Contact Us</p>
      <h2 className="text-[#1B1725] text-[2rem] font-medium ">
        Connect with Us
      </h2>
      <p>
        For inquiries or assistance, please use the contact information provided
        below.
      </p>

      <div className="content2">
        <div className="flex gap-3 items-center">
          <Phone />

          <div className="">
            <p className="font-bold pb-[0.5rem]">Phone Number</p>
            <p className="text-[0.8rem]">
              +61 (1300) 580701 AUSTRALIA (FREEPHONE)
            </p>
            <p className="text-[0.8rem]">+1 (866) 519-2589 USA</p>
            <p className="text-[0.9rem]">0207 459 4467 UK</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Email />

          <div>
            <p className="font-bold pb-[0.5rem]">Email</p>
            <p className="text-[0.8rem]">accounts@boxwood-cap.com</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Location />

          <div>
            <p className="font-bold pb-[0.5rem]">Location</p>
            <p className="text-[0.8rem]">
              46/48, Beak Street, London, England, W1F 9RJ
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactUs;
