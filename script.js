//Good 
import { barChart } from "./Bar.js";
import { hBarChart } from "./HBar.js";
import { lineChart } from "./Line.js";
import { lineBarChart } from "./LineBar.js";
import { scatterChart } from "./Scatter.js";
//Selected trace can't highlight
import { pieChart } from "./Pie.js";
import { donutChart } from "./Donut.js";
import { heatmapChart } from "./Heatmap.js";
import { histogramChart } from "./Histogram.js";
//Style ugly
import { gaugeChart } from "./Gauge.js";


var data = gaugeChart;

let layoutTemplate = {
    data: {
        heatmap: [
            {
                type: "heatmap",
                colorbar: {
                    outlinewidth: 0,
                    ticks: "",
                },
                colorscale: [
                    [0, "#0d0887"],
                    [0.1111111111111111, "#46039f"],
                    [0.2222222222222222, "#7201a8"],
                    [0.3333333333333333, "#9c179e"],
                    [0.4444444444444444, "#bd3786"],
                    [0.5555555555555556, "#d8576b"],
                    [0.6666666666666666, "#ed7953"],
                    [0.7777777777777778, "#fb9f3a"],
                    [0.8888888888888888, "#fdca26"],
                    [1, "#f0f921"],
                ],
            },
        ],
        scatter: [
            {
                fillpattern: {
                    fillmode: "overlay",
                    size: 16,
                    solidity: 0.2,
                },
                type: "scatter",
                marker: {
                    size: 16,
                },
            },
        ],
        bar: [
            {
                error_x: {
                    color: "#2a3f5f",
                },
                error_y: {
                    color: "#2a3f5f",
                },
                marker: {
                    line: {
                        color: "#E5ECF6",
                        width: 0.5,
                    },
                    pattern: {
                        fillmode: "overlay",
                        size: 10,
                        solidity: 0.2,
                    },
                    size: 16,
                },
                type: "bar",
            },
        ],
        scatterpolar: [
            {
                type: "scatterpolar",
                marker: {
                    colorbar: {
                        outlinewidth: 0,
                        ticks: "",
                    },
                },
            },
        ],
        histogram: [
            {
                marker: {
                    pattern: {
                        fillmode: "overlay",
                        size: 16,
                        solidity: 0.2,
                    },
                },
                type: "histogram",
            },
        ],
        barpolar: [
            {
                marker: {
                    line: {
                        color: "#E5ECF6",
                        width: 0.5,
                    },
                    pattern: {
                        fillmode: "overlay",
                        size: 16,
                        solidity: 0.2,
                    },
                },
                type: "barpolar",
            },
        ],
        pie: [
            {
                automargin: true,
                type: "pie",
            },
        ],
    },
    layout: {
        autotypenumbers: "strict",
        colorway: [
            "#636efa",
            "#EF553B",
            "#00cc96",
            "#ab63fa",
            "#FFA15A",
            "#19d3f3",
            "#FF6692",
            "#B6E880",
            "#FF97FF",
            "#FECB52",
        ],
        font: {
            color: "#2a3f5f",
        },
        paper_bgcolor: "white",
        plot_bgcolor: "white",
        coloraxis: {
            colorbar: {
                outlinewidth: 0,
                ticks: "",
            },
        },
        colorscale: {
            sequential: [
                [0, "#0d0887"],
                [0.1111111111111111, "#46039f"],
                [0.2222222222222222, "#7201a8"],
                [0.3333333333333333, "#9c179e"],
                [0.4444444444444444, "#bd3786"],
                [0.5555555555555556, "#d8576b"],
                [0.6666666666666666, "#ed7953"],
                [0.7777777777777778, "#fb9f3a"],
                [0.8888888888888888, "#fdca26"],
                [1, "#f0f921"],
            ],
            sequentialminus: [
                [0, "#0d0887"],
                [0.1111111111111111, "#46039f"],
                [0.2222222222222222, "#7201a8"],
                [0.3333333333333333, "#9c179e"],
                [0.4444444444444444, "#bd3786"],
                [0.5555555555555556, "#d8576b"],
                [0.6666666666666666, "#ed7953"],
                [0.7777777777777778, "#fb9f3a"],
                [0.8888888888888888, "#fdca26"],
                [1, "#f0f921"],
            ],
            diverging: [
                [0, "#8e0152"],
                [0.1, "#c51b7d"],
                [0.2, "#de77ae"],
                [0.3, "#f1b6da"],
                [0.4, "#fde0ef"],
                [0.5, "#f7f7f7"],
                [0.6, "#e6f5d0"],
                [0.7, "#b8e186"],
                [0.8, "#7fbc41"],
                [0.9, "#4d9221"],
                [1, "#276419"],
            ],
        },
        xaxis: {
            gridcolor: "white",
            linecolor: "white",
            ticks: "",
            title: {
                standoff: 15,
            },
            zerolinecolor: "EBEBEB",
            automargin: true,
            zerolinewidth: 1,
        },
        yaxis: {
            gridcolor: "#EBEBEB",
            linecolor: "#EBEBEB",
            ticks: "",
            title: {
                standoff: 15,
            },
            zerolinecolor: "#EBEBEB",
            automargin: true,
            zerolinewidth: 1,
        },
    },
};

let layout = {
    template: layoutTemplate,
    //customized
    height: window.innerHeight,
    width: window.innerWidth,
    margin: {
        l: 40, // left
        r: 40, // right
        t: 40, // top
        b: 100, // bottom
    },
    hovermode: "closest",
    clickmode: "event",
    autotypenumbers: "strict",
    dragmode: false,
    legend: {
        orientation: "h",
        y: -0.05,
        x: 0.5,
        xanchor: "center",
    },
    //end customized
};

if (Array.isArray(data)) {
    data.forEach((trace) => {
        trace.hoverinfo = "none";
        trace.hovertemplate = "";
        trace.hovertext = "";

        // Determine if the trace has marker and/or line
        const hasMarker = !["pie", "heatmap"].includes(trace.type);
        const hasLine = ["scatter", "line"].includes(trace.type);

        trace.selected = trace.selected || {};
        trace.unselected = trace.unselected || {};

        if (hasMarker) {
            trace.selected.marker = trace.selected.marker || {};
            trace.selected.marker.opacity = 1;
        }
        if (hasLine) {
            trace.selected.line = trace.selected.line || {};
            trace.unselected.line = trace.unselected.line || {};
            trace.selected.line.opacity = 1;
            trace.unselected.line.opacity = 0.2;
        }
    });
}

Plotly.newPlot("myDiv", data, layout, {
    displayModeBar: false,
    responsive: true,
}).then(() => {
    const myDiv = document.getElementById("myDiv");

    // --- custom tooltip & selection ---
    let selectedPoint = null;
    let lastClickTime = 0;

    myDiv.on("plotly_click", function (data) {
        
        // Prevent double click on mobile
        const now = Date.now();
        if (now - lastClickTime < 200) return;
        lastClickTime = now;

        console.log(data);

        //Hide tooltip, doesn't work now
        if (!data || !data.points || data.points.length === 0) {
            console.log("🟦 Clicked empty space, hiding tooltip");
            const updates = Array(myDiv.data.length).fill(null);
            Plotly.restyle(myDiv, { selectedpoints: updates });
            selectedPoint = null;
            const tooltip = document.getElementById("custom-tooltip");
            if (tooltip) tooltip.style.opacity = 0;
            return;
        }

        //Show tooltip
        const tooltip = document.getElementById("custom-tooltip");
        const pt = data.points[0];
        if (!tooltip) return;

        const curveIndex = pt.curveNumber;
        const pointIndex = pt.pointIndex;

        const isSamePoint =
            selectedPoint &&
            selectedPoint.curve === curveIndex &&
            selectedPoint.point === pointIndex;

        if (isSamePoint) {
            console.log("🟨 Clicked same point again, toggling off");
            const updates = Array(myDiv.data.length).fill(null);
            Plotly.restyle(myDiv, { selectedpoints: updates });
            selectedPoint = null;
            tooltip.style.opacity = 0;
        } else {
            console.log("🟩 Clicked new point, showing tooltip");

            //Locate and change content in tooltip
            const xLabel = pt.x;
            const label = pt.label;
            const traceColor = pt.color || "#636efa";
            const traceName = pt.data.name || null;
            const value = pt.value;
            const yValue = pt.y;

            tooltip.innerHTML = `
            <div class="tooltip-header">${label || xLabel}</div>
            <div class="tooltip-row">
                <span class="tooltip-legend">            
                    <span class="tooltip-color" style="background:${traceColor};"> </span>
                    ${traceName ? `<span class="tooltip-label">${traceName}</span>` : ""}
                </span>
                <span class="tooltip-value">${value || yValue}</span>
            </div>`;

            const plotRect = myDiv.getBoundingClientRect();
            const tooltipWidth = tooltip.offsetWidth;
            const tooltipHeight = tooltip.offsetHeight;
            let left = data.event.clientX - tooltipWidth / 2;
            let top = data.event.clientY - tooltipHeight - 20;

            if (left + tooltipWidth > plotRect.right) {
                left = plotRect.right - tooltipWidth - 10;
            }
            if (left < plotRect.left) {
                left = plotRect.left + 10;
            }
            if (top + tooltipHeight > plotRect.bottom) {
                top = plotRect.bottom - tooltipHeight - 10;
            }
            if (top < plotRect.top) {
                top = plotRect.top + 10;
            }

            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
            tooltip.style.opacity = 1;

            if (pt.data.type === "histogram") return;
            const selectableTypes = [
                "bar",
                "histogram",
                "scatter",
                "line",
                "area",
            ];
            const updates = myDiv.data.map((trace, i) => {
                if (selectableTypes.includes(trace.type)) {
                    return i === curveIndex ? [pointIndex] : [null];
                } else {
                    return null;
                }
            });
            Plotly.restyle(myDiv, { selectedpoints: updates });
            selectedPoint = { curve: curveIndex, point: pointIndex };
        }
    });
    // --- end custom tooltip & selection ---
});
