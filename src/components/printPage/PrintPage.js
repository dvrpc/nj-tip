import React, { Component } from "react";
import PrintTemplate from "react-print";

const printMain = {
  padding: "2% 3%",
  color: "#333"
};
const printTable = {
  width: "100%",
  padding: "2% 0",
  textAlign: "center"
};
const header = {
  fontSize: "1.5rem",
  textAlign: "center"
};
const subHeaders = {
  fontSize: "1rem",
  textAlign: "left",
  paddingTop: "5%",
  borderBottom: "1px solid black"
};

class PrintPage extends Component {
  render() {
    const details = this.props.details;
    const totals = this.props.totals;

    return (
      <PrintTemplate style={printMain}>
        <h1 style={header}>{details.road_name}</h1>

        <h2 style={{ fontSize: "1.2rem", textAlign: "center" }}>
          DB #{details.id}
        </h2>

        <p style={{ padding: "2% 0" }}>{details.description}</p>

        <h3 style={{ fontSize: "1rem" }}>
          Municipality(s):{" "}
          <span style={{ fontWeight: "400" }}>{details.municipalities}</span>
        </h3>
        <h3 style={{ fontSize: "1rem" }}>
          County(s): <span style={{ fontWeight: "400" }}>{details.county}</span>
        </h3>
        <h3 style={{ fontSize: "1rem" }}>Program: {details.program}</h3>
        <h3 style={{ fontSize: "1rem" }}>
          Air Quality Code:{" "}
          <span style={{ fontWeight: "400" }}>{details.aq_code}</span>
        </h3>
        <h3 style={{ fontSize: "1rem" }}>
          Limits: <span style={{ fontWeight: "400" }}>{details.limits}</span>
        </h3>

        <h1 style={subHeaders}>Project Funding:</h1>
        {details.funding.data.length ? (
          <div>
            <table style={printTable}>
              <thead>
                <tr>
                  <td colSpan="2" />
                  <td
                    colSpan="4"
                    style={{ fontWeight: "700", textAlign: "center" }}
                  >
                    NJ FY2022 TIP Program Years (in Millions)
                  </td>
                  <td colSpan="2" />
                </tr>
              </thead>

              <tbody>
                <tr style={{ color: "#333" }}>
                  <td>Phase</td>
                  <td>Fund</td>
                  <td style={{ fontWeight: "700" }}>FY22</td>
                  <td style={{ fontWeight: "700" }}>FY23</td>
                  <td style={{ fontWeight: "700" }}>FY24</td>
                  <td style={{ fontWeight: "700" }}>FY25</td>
                  <td colSpan={2}>2026-2031</td>
                </tr>

                {details.funding.data.map(row => (
                  <tr className="table-data-rows" key={row.join()}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>${row[2]}</td>
                    <td>${row[3]}</td>
                    <td>${row[4]}</td>
                    <td>${row[5]}</td>
                    <td colSpan={2}>${row[6]}</td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="2" style={{ fontWeight: "700", color: "#333" }}>
                    Program Year Totals (in Millions):
                  </td>
                  <td style={{ fontWeight: "700" }}>{totals[0]}</td>
                  <td style={{ fontWeight: "700" }}>{totals[1]}</td>
                  <td style={{ fontWeight: "700" }}>{totals[2]}</td>
                  <td style={{ fontWeight: "700" }}>{totals[3]}</td>
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
            <p style={{ marginLeft: "2%" }}>
              Total FY22 - FY25 Cost (in Millions): <strong>{totals[4]}</strong>
            </p>

            <p style={{ marginLeft: "2%" }}>
              Total FY22 - FY31 Cost (in Millions): <strong>{totals[5]}</strong>
            </p>
          </div>
        ) : (
          <h3 id="noFunding" style={{ fontSize: "0.9rem" }}>
            This project is in the Study and Development Program, which could
            become a candidate for consideration in a future TIP and STIP Update
            for the phases of Preliminary Engineering, Final Design,
            Right-of-Way Acquisition, and Construction.
          </h3>
        )}

        <h1 style={subHeaders}>Project Status:</h1>
        {details.milestones.data.length ? (
          <table style={printTable}>
            <thead>
              <tr>
                <th style={{ textAlign: "left" }}>Milestone</th>
                <th>Estimated Date</th>
                <th>Actual Date</th>
              </tr>
            </thead>

            <tbody>
              {details.milestones.data.map(row => (
                <tr key={row.join()}>
                  <td style={{ textAlign: "left" }}>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3 id="noMilestones" style={{ fontSize: "0.9rem" }}>
            No milestones are available for this project.
          </h3>
        )}
      </PrintTemplate>
    );
  }
}

export default PrintPage;
