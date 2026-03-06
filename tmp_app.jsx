import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/App.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=e8b9a0f0"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("C:/Users/shiva/Documents/deck/src/App.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$(), _s2 = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=e8b9a0f0"; const React = __vite__cjsImport3_react.__esModule ? __vite__cjsImport3_react.default : __vite__cjsImport3_react; const useContext = __vite__cjsImport3_react["useContext"];
import { Routes, Route, Navigate, useParams } from "/node_modules/.vite/deps/react-router-dom.js?v=0c9def22";
import styled, { ThemeProvider } from "/node_modules/.vite/deps/styled-components.js?v=21337d0e";
import { PresentationContext } from "/src/context/PresentationContext.jsx?t=1772005736170";
import Navigation from "/src/components/Navigation.jsx?t=1772005736170";
import ProgressBar from "/src/components/ProgressBar.jsx?t=1772005736170";
import ThumbnailsSidebar from "/src/components/ThumbnailsSidebar.jsx?t=1772005736170";
import PresenterNotes from "/src/components/PresenterNotes.jsx?t=1772005736170";
import TitleSlide from "/src/components/SlideContent/TitleSlide.jsx?t=1772005736170";
import WhatIsResearch from "/src/components/SlideContent/WhatIsResearch.jsx?t=1772005736170";
import Importance from "/src/components/SlideContent/Importance.jsx?t=1772005736170";
import StepsOverview from "/src/components/SlideContent/StepsOverview.jsx?t=1772005736170";
import Step1 from "/src/components/SlideContent/Step1.jsx?t=1772005736170";
import Step2 from "/src/components/SlideContent/Step2.jsx?t=1772005736170";
import Steps3and4 from "/src/components/SlideContent/Steps3and4.jsx?t=1772005736170";
import Steps5and6 from "/src/components/SlideContent/Steps5and6.jsx?t=1772005736170";
import Steps7and8 from "/src/components/SlideContent/Steps7and8.jsx?t=1772005736170";
import Steps9and10 from "/src/components/SlideContent/Steps9and10.jsx?t=1772005736170";
import TypesMethodology from "/src/components/SlideContent/TypesMethodology.jsx?t=1772005736170";
import KeyConsiderations from "/src/components/SlideContent/KeyConsiderations.jsx?t=1772005736170";
import Challenges from "/src/components/SlideContent/Challenges.jsx?t=1772005736170";
import Conclusion from "/src/components/SlideContent/Conclusion.jsx?t=1772005736170";
import { themeLight, themeDark } from "/src/styles/theme.js?t=1772005763810";
const AppShell = styled.div`
  display:flex;flex-direction:column;height:100vh;width:100%;align-items:center;justify-content:flex-start;
  background: ${(p) => p.theme.background};
  color: ${(p) => p.theme.text};
`;
_c = AppShell;
function SlideRoute() {
  _s();
  const { id } = useParams();
  const slideId = parseInt(id || "1", 10);
  const compMap = {
    1: /* @__PURE__ */ jsxDEV(TitleSlide, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 55,
      columnNumber: 8
    }, this),
    2: /* @__PURE__ */ jsxDEV(WhatIsResearch, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 56,
      columnNumber: 8
    }, this),
    3: /* @__PURE__ */ jsxDEV(Importance, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 57,
      columnNumber: 8
    }, this),
    4: /* @__PURE__ */ jsxDEV(StepsOverview, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 58,
      columnNumber: 8
    }, this),
    5: /* @__PURE__ */ jsxDEV(Step1, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 59,
      columnNumber: 8
    }, this),
    6: /* @__PURE__ */ jsxDEV(Step2, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 60,
      columnNumber: 8
    }, this),
    7: /* @__PURE__ */ jsxDEV(Steps3and4, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 61,
      columnNumber: 8
    }, this),
    8: /* @__PURE__ */ jsxDEV(Steps5and6, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 62,
      columnNumber: 8
    }, this),
    9: /* @__PURE__ */ jsxDEV(Steps7and8, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 63,
      columnNumber: 8
    }, this),
    10: /* @__PURE__ */ jsxDEV(Steps9and10, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 64,
      columnNumber: 9
    }, this),
    11: /* @__PURE__ */ jsxDEV(TypesMethodology, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 65,
      columnNumber: 9
    }, this),
    12: /* @__PURE__ */ jsxDEV(KeyConsiderations, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    13: /* @__PURE__ */ jsxDEV(Challenges, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 67,
      columnNumber: 9
    }, this),
    14: /* @__PURE__ */ jsxDEV(Conclusion, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 68,
      columnNumber: 9
    }, this)
  };
  return compMap[slideId] || /* @__PURE__ */ jsxDEV(Navigate, { to: "/slide/1", replace: true }, void 0, false, {
    fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
    lineNumber: 71,
    columnNumber: 30
  }, this);
}
_s(SlideRoute, "yQgCIz/jJfqV1l9s2yoba81MT5A=", false, function() {
  return [useParams];
});
_c2 = SlideRoute;
export default function App() {
  _s2();
  const { theme } = useContext(PresentationContext);
  return /* @__PURE__ */ jsxDEV(ThemeProvider, { theme: theme === "dark" ? themeDark : themeLight, children: /* @__PURE__ */ jsxDEV(AppShell, { children: [
    /* @__PURE__ */ jsxDEV(Navigation, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 80,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(ThumbnailsSidebar, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 81,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(PresenterNotes, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 82,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(Routes, { children: [
      /* @__PURE__ */ jsxDEV(Route, { path: "/", element: /* @__PURE__ */ jsxDEV(Navigate, { to: "/slide/1", replace: true }, void 0, false, {
        fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
        lineNumber: 84,
        columnNumber: 36
      }, this) }, void 0, false, {
        fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
        lineNumber: 84,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV(Route, { path: "/slide/:id", element: /* @__PURE__ */ jsxDEV(SlideRoute, {}, void 0, false, {
        fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
        lineNumber: 85,
        columnNumber: 45
      }, this) }, void 0, false, {
        fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
        lineNumber: 85,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV(ProgressBar, {}, void 0, false, {
      fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
      lineNumber: 87,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "C:/Users/shiva/Documents/deck/src/App.jsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}
_s2(App, "LidUGjXGvl6nqLnPI8yC77ot4bM=");
_c3 = App;
var _c, _c2, _c3;
$RefreshReg$(_c, "AppShell");
$RefreshReg$(_c2, "SlideRoute");
$RefreshReg$(_c3, "App");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/shiva/Documents/deck/src/App.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/shiva/Documents/deck/src/App.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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Z0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFXO0FBQUEsSUFDWCx1QkFBQyx1QkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWtCO0FBQUEsSUFDbEIsdUJBQUMsb0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFlO0FBQUEsSUFDZix1QkFBQyxVQUNDO0FBQUEsNkJBQUMsU0FBTSxNQUFLLEtBQUksU0FBUyx1QkFBQyxZQUFTLElBQUcsWUFBVyxTQUFPLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBK0IsS0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE0RDtBQUFBLE1BQzVELHVCQUFDLFNBQU0sTUFBSyxjQUFhLFNBQVMsdUJBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFXLEtBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBaUQ7QUFBQSxTQUZuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBR0E7QUFBQSxJQUNBLHVCQUFDLGlCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBWTtBQUFBLE9BUmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVNBLEtBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVdBO0FBRUo7QUFBQ2dCLElBakJ1QkQsS0FBRztBQUFBLE1BQUhBO0FBQUcsSUFBQVAsSUFBQVMsS0FBQUM7QUFBQSxhQUFBVixJQUFBO0FBQUEsYUFBQVMsS0FBQTtBQUFBLGFBQUFDLEtBQUEiLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJSb3V0ZXMiLCJSb3V0ZSIsIk5hdmlnYXRlIiwidXNlUGFyYW1zIiwic3R5bGVkIiwiVGhlbWVQcm92aWRlciIsIlByZXNlbnRhdGlvbkNvbnRleHQiLCJOYXZpZ2F0aW9uIiwiUHJvZ3Jlc3NCYXIiLCJUaHVtYm5haWxzU2lkZWJhciIsIlByZXNlbnRlck5vdGVzIiwiVGl0bGVTbGlkZSIsIldoYXRJc1Jlc2VhcmNoIiwiSW1wb3J0YW5jZSIsIlN0ZXBzT3ZlcnZpZXciLCJTdGVwMSIsIlN0ZXAyIiwiU3RlcHMzYW5kNCIsIlN0ZXBzNWFuZDYiLCJTdGVwczdhbmQ4IiwiU3RlcHM5YW5kMTAiLCJUeXBlc01ldGhvZG9sb2d5IiwiS2V5Q29uc2lkZXJhdGlvbnMiLCJDaGFsbGVuZ2VzIiwiQ29uY2x1c2lvbiIsInRoZW1lTGlnaHQiLCJ0aGVtZURhcmsiLCJBcHBTaGVsbCIsImRpdiIsInAiLCJ0aGVtZSIsImJhY2tncm91bmQiLCJ0ZXh0IiwiX2MiLCJTbGlkZVJvdXRlIiwiX3MiLCJpZCIsInNsaWRlSWQiLCJwYXJzZUludCIsImNvbXBNYXAiLCJBcHAiLCJfczIiLCJfYzIiLCJfYzMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQXBwLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlLCBOYXZpZ2F0ZSwgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHN0eWxlZCwgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IFByZXNlbnRhdGlvbkNvbnRleHQgfSBmcm9tICcuL2NvbnRleHQvUHJlc2VudGF0aW9uQ29udGV4dCdcclxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL05hdmlnYXRpb24nXHJcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInXHJcbmltcG9ydCBUaHVtYm5haWxzU2lkZWJhciBmcm9tICcuL2NvbXBvbmVudHMvVGh1bWJuYWlsc1NpZGViYXInXHJcbmltcG9ydCBQcmVzZW50ZXJOb3RlcyBmcm9tICcuL2NvbXBvbmVudHMvUHJlc2VudGVyTm90ZXMnXHJcbmltcG9ydCBUaXRsZVNsaWRlIGZyb20gJy4vY29tcG9uZW50cy9TbGlkZUNvbnRlbnQvVGl0bGVTbGlkZSdcclxuaW1wb3J0IFdoYXRJc1Jlc2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9TbGlkZUNvbnRlbnQvV2hhdElzUmVzZWFyY2gnXHJcbmltcG9ydCBJbXBvcnRhbmNlIGZyb20gJy4vY29tcG9uZW50cy9TbGlkZUNvbnRlbnQvSW1wb3J0YW5jZSdcclxuaW1wb3J0IFN0ZXBzT3ZlcnZpZXcgZnJvbSAnLi9jb21wb25lbnRzL1NsaWRlQ29udGVudC9TdGVwc092ZXJ2aWV3J1xyXG5pbXBvcnQgU3RlcDEgZnJvbSAnLi9jb21wb25lbnRzL1NsaWRlQ29udGVudC9TdGVwMSdcclxuaW1wb3J0IFN0ZXAyIGZyb20gJy4vY29tcG9uZW50cy9TbGlkZUNvbnRlbnQvU3RlcDInXHJcbmltcG9ydCBTdGVwczNhbmQ0IGZyb20gJy4vY29tcG9uZW50cy9TbGlkZUNvbnRlbnQvU3RlcHMzYW5kNCdcclxuaW1wb3J0IFN0ZXBzNWFuZDYgZnJvbSAnLi9jb21wb25lbnRzL1NsaWRlQ29udGVudC9TdGVwczVhbmQ2J1xyXG5pbXBvcnQgU3RlcHM3YW5kOCBmcm9tICcuL2NvbXBvbmVudHMvU2xpZGVDb250ZW50L1N0ZXBzN2FuZDgnXHJcbmltcG9ydCBTdGVwczlhbmQxMCBmcm9tICcuL2NvbXBvbmVudHMvU2xpZGVDb250ZW50L1N0ZXBzOWFuZDEwJ1xyXG5pbXBvcnQgVHlwZXNNZXRob2RvbG9neSBmcm9tICcuL2NvbXBvbmVudHMvU2xpZGVDb250ZW50L1R5cGVzTWV0aG9kb2xvZ3knXHJcbmltcG9ydCBLZXlDb25zaWRlcmF0aW9ucyBmcm9tICcuL2NvbXBvbmVudHMvU2xpZGVDb250ZW50L0tleUNvbnNpZGVyYXRpb25zJ1xyXG5pbXBvcnQgQ2hhbGxlbmdlcyBmcm9tICcuL2NvbXBvbmVudHMvU2xpZGVDb250ZW50L0NoYWxsZW5nZXMnXHJcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gJy4vY29tcG9uZW50cy9TbGlkZUNvbnRlbnQvQ29uY2x1c2lvbidcclxuaW1wb3J0IHsgdGhlbWVMaWdodCwgdGhlbWVEYXJrIH0gZnJvbSAnLi9zdHlsZXMvdGhlbWUnXHJcblxyXG5jb25zdCBBcHBTaGVsbCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtoZWlnaHQ6MTAwdmg7d2lkdGg6MTAwJTthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgYmFja2dyb3VuZDogJHtwID0+IHAudGhlbWUuYmFja2dyb3VuZH07XHJcbiAgY29sb3I6ICR7cCA9PiBwLnRoZW1lLnRleHR9O1xyXG5gXHJcblxyXG5mdW5jdGlvbiBTbGlkZVJvdXRlKCkge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpXHJcbiAgY29uc3Qgc2xpZGVJZCA9IHBhcnNlSW50KGlkIHx8ICcxJywgMTApXHJcblxyXG4gIGNvbnN0IGNvbXBNYXAgPSB7XHJcbiAgICAxOiA8VGl0bGVTbGlkZSAvPixcclxuICAgIDI6IDxXaGF0SXNSZXNlYXJjaCAvPixcclxuICAgIDM6IDxJbXBvcnRhbmNlIC8+LFxyXG4gICAgNDogPFN0ZXBzT3ZlcnZpZXcgLz4sXHJcbiAgICA1OiA8U3RlcDEgLz4sXHJcbiAgICA2OiA8U3RlcDIgLz4sXHJcbiAgICA3OiA8U3RlcHMzYW5kNCAvPixcclxuICAgIDg6IDxTdGVwczVhbmQ2IC8+LFxyXG4gICAgOTogPFN0ZXBzN2FuZDggLz4sXHJcbiAgICAxMDogPFN0ZXBzOWFuZDEwIC8+LFxyXG4gICAgMTE6IDxUeXBlc01ldGhvZG9sb2d5IC8+LFxyXG4gICAgMTI6IDxLZXlDb25zaWRlcmF0aW9ucyAvPixcclxuICAgIDEzOiA8Q2hhbGxlbmdlcyAvPixcclxuICAgIDE0OiA8Q29uY2x1c2lvbiAvPlxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbXBNYXBbc2xpZGVJZF0gfHwgPE5hdmlnYXRlIHRvPVwiL3NsaWRlLzFcIiByZXBsYWNlIC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpe1xyXG4gIGNvbnN0IHsgdGhlbWUgfSA9IHVzZUNvbnRleHQoUHJlc2VudGF0aW9uQ29udGV4dClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZSA9PT0gJ2RhcmsnID8gdGhlbWVEYXJrIDogdGhlbWVMaWdodH0+XHJcbiAgICAgIDxBcHBTaGVsbD5cclxuICAgICAgICA8TmF2aWdhdGlvbiAvPlxyXG4gICAgICAgIDxUaHVtYm5haWxzU2lkZWJhciAvPlxyXG4gICAgICAgIDxQcmVzZW50ZXJOb3RlcyAvPlxyXG4gICAgICAgIDxSb3V0ZXM+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8TmF2aWdhdGUgdG89XCIvc2xpZGUvMVwiIHJlcGxhY2UgLz59IC8+XHJcbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9zbGlkZS86aWRcIiBlbGVtZW50PXs8U2xpZGVSb3V0ZSAvPn0gLz5cclxuICAgICAgICA8L1JvdXRlcz5cclxuICAgICAgICA8UHJvZ3Jlc3NCYXIgLz5cclxuICAgICAgPC9BcHBTaGVsbD5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApXHJcbn1cclxuIl0sImZpbGUiOiJDOi9Vc2Vycy9zaGl2YS9Eb2N1bWVudHMvZGVjay9zcmMvQXBwLmpzeCJ9
