import React, { useEffect, useRef } from "react";
import { CChartLine } from "@coreui/react-chartjs";
import { getStyle } from "@coreui/utils";
import styled from "styled-components";

// 🎨 Styled Components สำหรับ Container ของกราฟ
const ChartContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  margin-top: 40px;

  &:hover {
    transform: scale(1.02);
  }
`;

const MainChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    document.documentElement.addEventListener("ColorSchemeChange", () => {
      if (chartRef.current) {
        setTimeout(() => {
          const chart = chartRef.current;
          chart.options.scales.x.grid.color = getStyle("--cui-border-color-translucent");
          chart.options.scales.y.grid.color = getStyle("--cui-border-color-translucent");
          chart.options.scales.x.ticks.color = getStyle("--cui-body-color");
          chart.options.scales.y.ticks.color = getStyle("--cui-body-color");
          chart.update();
        });
      }
    });
  }, [chartRef]);

  const randomData = () => Math.floor(Math.random() * 150) + 50;

  return (
    <ChartContainer>
      <CChartLine
        ref={chartRef}
        style={{ height: "300px" }}
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          datasets: [
            {
              label: "Dataset 1",
              backgroundColor: "rgba(0, 123, 255, 0.1)",
              borderColor: "#007bff",
              pointBackgroundColor: "#007bff",
              borderWidth: 3,
              data: Array.from({ length: 7 }, randomData),
              fill: true,
            },
            {
              label: "Dataset 2",
              backgroundColor: "rgba(40, 167, 69, 0.1)",
              borderColor: "#28a745",
              pointBackgroundColor: "#28a745",
              borderWidth: 3,
              data: Array.from({ length: 7 }, randomData),
              fill: true,
            },
            {
              label: "Baseline",
              borderColor: "#ff073a",
              borderDash: [6, 6],
              borderWidth: 2,
              data: Array(7).fill(80),
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            legend: {
              display: true,
              labels: {
                color: getStyle("--cui-body-color"),
                font: {
                  size: 12,
                  weight: "bold",
                },
              },
            },
          },
          scales: {
            x: {
              grid: {
                color: getStyle("--cui-border-color-translucent"),
                drawOnChartArea: false,
              },
              ticks: {
                color: getStyle("--cui-body-color"),
                font: {
                  size: 12,
                },
              },
            },
            y: {
              beginAtZero: true,
              max: 200,
              grid: {
                color: getStyle("--cui-border-color-translucent"),
              },
              ticks: {
                color: getStyle("--cui-body-color"),
                stepSize: 50,
                font: {
                  size: 12,
                },
              },
            },
          },
          elements: {
            line: {
              tension: 0.3, // ให้เส้นกราฟดู Smooth
            },
            point: {
              radius: 5,
              hoverRadius: 8,
              hoverBorderWidth: 2,
            },
          },
        }}
      />
    </ChartContainer>
  );
};

export default MainChart;
