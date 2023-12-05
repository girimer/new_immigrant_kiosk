import PhotoCard from "../components/PhotoCard";
import FaresTable from "../components/tables/FaresTable";
import PassesTable from "../components/tables/PassesTable";
import Header from "../components/Header";
import calgaryTrainImage from "/src/Images/calgary-train.jpg";
export default function FaresScreen() {
  return (
    <>
      <Header isLanguageDropdownVisible={true} rotateBannerText={true} />
      <div className="flex justify-between ml-12">
        <div
          className="left-col"
          style={{ paddingLeft: "20px", maxWidth: "500px" }}
        >
          <h2 style={{ color: "#df0c2e" }}>
            Choose what's best for your needs
          </h2>
          <p>
            Calgary Transit offers many different options to help you get
            around. Here is an overview of the cost of fares and most common
            types of transit passes.
          </p>
          <div className="fares-table">
            <FaresTable />
          </div>
          <div className="passes-table" style={{ marginTop: "60px" }}>
            <PassesTable />
          </div>
        </div>
        <div className="right-col mr-12" style={{ paddingRight: "20px" }}>
          <PhotoCard
            headerVal="Special/Other passes"
            descriptionVal="Calgary Transit also offers other special types of passes, such as the Low Income Monthly pass or an annual pass for Regular Seniors. Learn more at www.calgarytransit.com"
            imagePath={calgaryTrainImage}
          />
        </div>
      </div>
    </>
  );
}
