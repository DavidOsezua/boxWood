// import { logo } from "../assets";
// import Download from "../components/SvgComponents/Download";
// import Left from "../components/SvgComponents/Left";
// import DoubleLeft from "../components/SvgComponents/DoubleLeft";
// import DoubleRight from "../components/SvgComponents/DoubleRight";
// import Right from "../components/SvgComponents/Right";
// import { useEffect, useState } from "react";
// import { getAllComplaint } from "../services/apiForm";

// const Admin = () => {
//   // States
//   const [complaints, setComplaints] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Handling side effect----Calling the endpoint to get all the complaints
//   useEffect(() => {
//     fetchComplaints();
//   }, []);

//   const fetchComplaints = async () => {
//     try {
//       const result = await getAllComplaint();

//       setComplaints(result);
//       console.log(result);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   console.log(complaints);
//   const rows = Array.from({ length: 13 }, (_, i) => ({
//     sn: "01",
//     name: "Johnnn Doooe",
//     email: "johndoe@gmail.com",
//     phone: "+1 0000 000 0000",
//     currency: "USDT",
//     amount: "14,000",
//     country: "United State",
//     state: "California",
//     recovered: "No",
//     summary: "This is testing testing",
//   }));

//   // Method 1: Simple CSV export using built-in JavaScript
//   const exportToCSV = (data, filename = "complaints.csv") => {
//     if (!data || data.length === 0) {
//       alert("No data to export");
//       return;
//     }

//     // Get headers from the first object
//     const headers = Object.keys(data[0]);

//     // Create CSV content
//     const csvContent = [
//       // Header row
//       headers.join(","),
//       // Data rows
//       ...data.map((row) =>
//         headers
//           .map((header) => {
//             const value = row[header];
//             // Escape commas and quotes in values
//             if (
//               typeof value === "string" &&
//               (value.includes(",") ||
//                 value.includes('"') ||
//                 value.includes("\n"))
//             ) {
//               return `"${value.replace(/"/g, '""')}"`;
//             }
//             return value || "";
//           })
//           .join(",")
//       ),
//     ].join("\n");

//     // Create and download file
//     const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//     const link = document.createElement("a");
//     const url = URL.createObjectURL(blob);

//     link.setAttribute("href", url);
//     link.setAttribute("download", filename);
//     link.style.visibility = "hidden";

//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <section className="section ">
//       <div className="sectionContainer ">
//         {/* LOGO */}
//         <div className="w-[135px]">
//           <img src={logo} />
//         </div>
//         {/* Add Button and Summary */}
//         <div className="flex gap-4">
//           <button className=" border-dashed border-[2px] border-black px-3 py-7 w-[140px] h-[79px] rounded">
//             + Add Currency
//           </button>

//           <div className="px-3 py-7 flex flex-col text-center w-[140px] bg-[#A0A0A026] h-[79px] rounded">
//             <p>Currency</p>
//             <p>5</p>
//           </div>
//         </div>
//         {/* Export and Search */}
//         <div className="flex flex-col md:flex-row justify-end w-full gap-4">
//           <button className="flex gap-2 justify-center py-3 text-sm w-full md:max-w-[150px]  items-center bg-[#FF3344] text-white rounded">
//             {" "}
//             <Download />
//             Export (CSV)
//           </button>

//           <div className="w-full md:max-w-[188px]">
//             <input
//               className="border px-4 py-3 rounded w-full "
//               placeholder="search..."
//             />
//           </div>
//         </div>
//         {/* Table */}
//         <div className="w-full overflow-x-auto">
//           <div className="min-w-[1300px]">
//             <table className="w-full    text-sm text-left">
//               <thead className="bg-[#E5E5E5] text-[#A5ACB6]  font-medium">
//                 <tr>
//                   {[
//                     "Sn",
//                     "Name",
//                     "Email",
//                     "Phone",
//                     "Currency",
//                     "Amount Lost",
//                     "Country",
//                     "State",
//                     "Recover?",
//                     "Summary",
//                   ].map((head, i) => (
//                     <th key={i} className="px-3 py-2 ">
//                       {head}
//                     </th>
//                   ))}
//                 </tr>
//               </thead>
//               <tbody>
//                 {complaints.map((row, i) => (
//                   <tr key={i} className="border text-[#07111B]">
//                     <td className="px-3 py-3 ">{row.sn}</td>
//                     <td className="px-3 py-3 ">{row.full_name}</td>
//                     <td className="px-3 py-3 ">{row.email}</td>
//                     <td className="px-3 py-3 ">{row.mobile_number}</td>
//                     <td className="px-3 py-3 ">
//                       {row.digital_currency_platform}
//                     </td>
//                     <td className="px-3 py-3 ">{row.amount_lost}</td>
//                     <td className="px-3 py-3 ">{row.country}</td>
//                     <td className="px-3 py-3 ">{row.state}</td>
//                     <td className="px-3 py-3 ">
//                       {row.attempted_recovery === true ? "Yes" : "No"}
//                     </td>
//                     <td className="px-3 py-3  flex items-center gap-2">
//                       {row.loss_description}
//                       <button className="bg-[#FFECEF] rounded-lg p-1 text-xs">
//                         Read more
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//           {/* Pagination */}
//           <div className="flex justify-center items-center gap-2 mt-4 text-sm text-gray-600">
//             <button className="p-1 border rounded hover:bg-gray-100">
//               <Left />
//             </button>
//             <button className="p-1 border rounded hover:bg-gray-100">
//               <DoubleLeft />
//             </button>
//             <span className="px-2">1</span>
//             <span>of</span>
//             <span className="px-2">2</span>
//             <button className="p-1 border rounded hover:bg-gray-100">
//               <DoubleRight />
//             </button>
//             <button className="p-1 border rounded hover:bg-gray-100">
//               <Right />
//             </button>
//           </div>
//         </div>{" "}
//       </div>
//     </section>
//   );
// };

// export default Admin;

import { logo } from "../assets";
import Download from "../components/SvgComponents/Download";
import Left from "../components/SvgComponents/Left";
import DoubleLeft from "../components/SvgComponents/DoubleLeft";
import DoubleRight from "../components/SvgComponents/DoubleRight";
import Right from "../components/SvgComponents/Right";
import { useEffect, useState } from "react";
import { getAllComplaint } from "../services/apiForm";

const Admin = () => {
  // States
  const [complaints, setComplaints] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const filtered = complaints.filter((complaint) =>
    Object.values(complaint).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Handling side effect----Calling the endpoint to get all the complaints
  useEffect(() => {
    fetchComplaints();
  }, []);

  // Filter complaints based on search term
  // useEffect(() => {
  //   if (searchTerm.trim() === "") {
  //     setFilteredComplaints(paginatedData);
  //   } else {
  //     setFilteredComplaints(filtered);
  //   }
  // }, [complaints, searchTerm, filtered,paginatedData]);

  console.log(filtered);

  const paginatedData = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);

  const fetchComplaints = async () => {
    try {
      const result = await getAllComplaint();
      setComplaints(result);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Enhanced CSV export function
  const exportToCSV = (data, filename = "complaints.csv") => {
    if (!data || data.length === 0) {
      alert("No data to export");
      return;
    }

    // Map your data structure to readable column names
    const columnMapping = {
      sn: "Serial Number",
      full_name: "Full Name",
      email: "Email Address",
      mobile_number: "Phone Number",
      digital_currency_platform: "Currency Platform",
      amount_lost: "Amount Lost",
      country: "Country",
      state: "State",
      attempted_recovery: "Recovery Attempted",
      loss_description: "Loss Description",
    };

    // Create headers using friendly names
    const headers = Object.values(columnMapping);

    // Create CSV content
    const csvContent = [
      // Header row
      headers.join(","),
      // Data rows
      ...data.map((row) =>
        Object.keys(columnMapping)
          .map((key) => {
            let value = row[key];

            // Handle special formatting
            if (key === "attempted_recovery") {
              value = value === true ? "Yes" : "No";
            }

            // Handle null/undefined values
            if (value === null || value === undefined) {
              value = "";
            }

            // Convert to string and escape commas, quotes, and newlines
            value = String(value);
            if (
              value.includes(",") ||
              value.includes('"') ||
              value.includes("\n")
            ) {
              value = `"${value.replace(/"/g, '""')}"`;
            }

            return value;
          })
          .join(",")
      ),
    ].join("\n");

    // Create and download file
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    URL.revokeObjectURL(url);
  };

  // Handle export button click
  const handleExportClick = () => {
    const dataToExport = filtered.length > 0 ? filtered : complaints;
    const timestamp = new Date().toISOString().split("T")[0];
    const filename = `complaints-export-${timestamp}.csv`;
    exportToCSV(dataToExport, filename);
  };

  // Next and Double Next buttons
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleDoubleNext = () => {
    if (currentPage + 2 <= totalPages) setCurrentPage(currentPage + 2);
    else setCurrentPage(totalPages);
  };

  // Previous and Double Previous buttons
  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleDoublePrevious = () => {
    if (currentPage - 2 >= 1) setCurrentPage(currentPage - 2);
    else setCurrentPage(1);
  };

  return (
    <section className="section ">
      <div className="sectionContainer ">
        {/* LOGO */}
        <div className="w-[135px]">
          <img src={logo} alt="Logo" />
        </div>

        {/* Add Button and Summary */}
        <div className="flex gap-4 w-full">
          <button className=" border-dashed border-[2px] border-black px-2 py-7 w-[140px] h-[79px] rounded">
            + Add Currency
          </button>

          <div className="px-3 py-7 flex flex-col text-center w-[140px] bg-[#A0A0A026] h-[79px] rounded">
            <p>Currency</p>
            <p>{complaints.length}</p>
          </div>
        </div>

        {/* Export and Search */}
        <div className="flex flex-col md:flex-row justify-end w-full gap-4">
          <button
            onClick={handleExportClick}
            className="flex gap-2 justify-center py-3 text-sm w-full md:max-w-[150px] items-center bg-[#FF3344] text-white rounded hover:bg-[#e62e3e] transition-colors"
            disabled={complaints.length === 0}
          >
            <Download />
            Export (CSV)
          </button>

          <div className="w-full md:max-w-[188px]">
            <input
              className="border px-4 py-3 rounded w-full"
              placeholder="search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[1300px]">
            <table className="w-full text-sm text-left">
              <thead className="bg-[#E5E5E5] text-[#A5ACB6] font-medium">
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
                    <th key={i} className="px-3 py-2">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((row, i) => (
                  <tr key={i} className="border text-[#07111B]">
                    <td className="px-3 py-3">{i + 1}</td>
                    <td className="px-3 py-3">{row.full_name}</td>
                    <td className="px-3 py-3">{row.email}</td>
                    <td className="px-3 py-3">{row.mobile_number}</td>
                    <td className="px-3 py-3">
                      {row.digital_currency_platform}
                    </td>
                    <td className="px-3 py-3">{row.amount_lost}</td>
                    <td className="px-3 py-3">{row.country}</td>
                    <td className="px-3 py-3">{row.state}</td>
                    <td className="px-3 py-3">
                      {row.attempted_recovery === true ? "Yes" : "No"}
                    </td>
                    <td className="px-3 py-3 flex justify-between items-center gap-2">
                      {row.loss_description}
                      <button className="bg-[#FFECEF] rounded-lg p-1 text-xs">
                        Read more
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Show message if no data */}
          {complaints.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No complaints data available
            </div>
          )}

          {/* Show message if no search results */}
          {filtered.length === 0 && searchTerm.trim() !== "" && (
            <div className="text-center py-8 text-gray-500">
              No results found for {searchTerm}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-4 text-sm text-gray-600">
            <button
              className="p-1 border rounded hover:bg-gray-100"
              onClick={handlePrevious}
            >
              <Left />
            </button>
            <button
              className="p-1 border rounded hover:bg-gray-100"
              onClick={handleDoublePrevious}
            >
              <DoubleLeft />
            </button>
            <span className="px-2">{currentPage}</span>
            <span>of</span>
            <span className="px-2">{totalPages}</span>
            <button
              className="p-1 border rounded hover:bg-gray-100"
              onClick={handleDoubleNext}
            >
              <DoubleRight />
            </button>
            <button
              className="p-1 border rounded hover:bg-gray-100"
              onClick={handleNext}
            >
              <Right />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
