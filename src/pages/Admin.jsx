import { logo } from "../assets";
import Download from "../components/SvgComponents/Download";
import Left from "../components/SvgComponents/Left";
import DoubleLeft from "../components/SvgComponents/DoubleLeft";
import DoubleRight from "../components/SvgComponents/DoubleRight";
import Right from "../components/SvgComponents/Right";

const Admin = () => {
  const rows = Array.from({ length: 13 }, (_, i) => ({
    sn: "01",
    name: "Johnnn Doooe",
    email: "johndoe@gmail.com",
    phone: "+1 0000 000 0000",
    currency: "USDT",
    amount: "14,000",
    country: "United State",
    state: "California",
    recovered: "No",
    summary: "This is testing testing",
  }));

  return (
    <section className="section ">
      <div className="sectionContainer ">
        {/* LOGO */}
        <div className="w-[135px]">
          <img src={logo} />
        </div>
        {/* Add Button and Summary */}
        <div className="flex gap-4">
          <button className=" border-dashed border-[2px] border-black px-3 py-7 w-[140px] h-[79px] rounded">
            + Add Currency
          </button>

          <div className="px-3 py-7 flex flex-col text-center w-[140px] bg-[#A0A0A026] h-[79px] rounded">
            <p>Currency</p>
            <p>5</p>
          </div>
        </div>
        {/* Export and Search */}
        <div className="flex flex-col md:flex-row justify-end w-full gap-4">
          <button className="flex gap-2 justify-center py-3 text-sm w-full md:max-w-[150px]  items-center bg-[#FF3344] text-white rounded">
            {" "}
            <Download />
            Export (CSV)
          </button>

          <div className="w-full md:max-w-[188px]">
            <input
              className="border px-4 py-3 rounded w-full "
              placeholder="search..."
            />
          </div>
        </div>
        {/* Table */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1300px]">
            <table className="w-full    text-sm text-left">
              <thead className="bg-[#E5E5E5] text-[#A5ACB6]  font-medium">
                <tr>
                  {[
                    "Sn",
                    "Name",
                    "Email",
                    "Phone",
                    "Currency",
                    "Amount Lost",
                    "Country",
                    "State",
                    "Recover?",
                    "Summary",
                  ].map((head, i) => (
                    <th key={i} className="px-3 py-2 ">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border text-[#07111B]">
                    <td className="px-3 py-3 ">{row.sn}</td>
                    <td className="px-3 py-3 ">{row.name}</td>
                    <td className="px-3 py-3 ">{row.email}</td>
                    <td className="px-3 py-3 ">{row.phone}</td>
                    <td className="px-3 py-3 ">{row.currency}</td>
                    <td className="px-3 py-3 ">{row.amount}</td>
                    <td className="px-3 py-3 ">{row.country}</td>
                    <td className="px-3 py-3 ">{row.state}</td>
                    <td className="px-3 py-3 ">{row.recovered}</td>
                    <td className="px-3 py-3  flex items-center gap-2">
                      {row.summary}
                      <button className="bg-[#FFECEF] rounded-lg p-1 text-xs">
                        Read more
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-4 text-sm text-gray-600">
            <button className="p-1 border rounded hover:bg-gray-100">
              <Left />
            </button>
            <button className="p-1 border rounded hover:bg-gray-100">
              <DoubleLeft />
            </button>
            <span className="px-2">1</span>
            <span>of</span>
            <span className="px-2">2</span>
            <button className="p-1 border rounded hover:bg-gray-100">
              <DoubleRight />
            </button>
            <button className="p-1 border rounded hover:bg-gray-100">
              <Right />
            </button>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Admin;
