import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import "../../componets/adminComponent/stylesheets/numSearchTable.css";
import More from "../../assets/icons/more.png";
import { useState, useEffect } from "react";

function createData(word, searches) {
  return { word, searches };
}

const rows2 = [
  createData("lorem", "2,455"),
  createData("lorem", "2,455"),
  createData("lorem", "2,455"),
  createData("lorem", "2,455"),
  createData("lorem", "2,455"),
  createData("lorem", "2,455"),
  createData("lorem", "2,455"),
  createData("lorem", "2,455"),
  createData("lorem", "2,455"),
];
const NumSearchTable = () => {
  const [visibleOptions, setVisibleOptions] = useState(
    Array(rows2.length).fill(false)
  );

  const handleOptionClick = (index) => {
    setVisibleOptions((prevVisibleOptions) => {
      const newVisibleOptions = [...prevVisibleOptions];
      newVisibleOptions[index] = !newVisibleOptions[index];
      return newVisibleOptions;
    });
    setTimeout(() => {
      setVisibleOptions((prevVisibleOptions) => {
        const newVisibleOptions = [...prevVisibleOptions];
        newVisibleOptions[index] = false;
        return newVisibleOptions;
      });
    }, 3000);
  };

  return (
    <>
      <div className="section">
        <h1>Top Searched words</h1>
        <Sheet
          sx={{
            "--TableCell-height": "40px",
            // the number is the amount of the header rows.
            "--TableHeader-height": "calc(1 * var(--TableCell-height))",
            width: 325,
            height: 490,
            margin: 2,
            overflow: "auto",
            background: (theme) =>
              `linear-gradient(${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
            linear-gradient(rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
            radial-gradient(
              farthest-side at 50% 0,
              rgba(0, 0, 0, 0.12),
              rgba(0, 0, 0, 0)
            ),
            radial-gradient(
                farthest-side at 50% 100%,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              )
              0 100%`,
            backgroundSize: "100% 40px, 100% 40px, 100% 14px, 100% 14px",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "local, local, scroll, scroll",
            backgroundPosition:
              "0 var(--TableHeader-height), 0 100%, 0 var(--TableHeader-height), 0 100%",
            backgroundColor: "background.surface",
            "@media (max-width: 500px)": {
              width: "460px",
              margin: "0",
            },
          }}
        >
          <Table stickyHeader sx={{ padding: 3, fontSize: 15 }}>
            <thead>
              <tr>
                <th>Words</th>
                <th>No.of Searches</th>
              </tr>
            </thead>
            <tbody sx={{ fontSize: 14, width: 20 }}>
              {rows2.map((row, index) => (
                <tr key={index}>
                  <td>{row.word}</td>
                  <td className="td-img">
                    {row.searches}
                    <img
                      src={More}
                      alt=""
                      width={20}
                      height={17}
                      onClick={() => handleOptionClick(index)}
                    />
                    {visibleOptions[index] && (
                      <div className="options">
                        <div>Delete</div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Sheet>
      </div>
    </>
  );
};
export default NumSearchTable;
