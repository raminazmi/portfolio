const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("one");
const listItems = paginatedList.querySelectorAll(".filterDiv");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const paginationLimit = 8;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
        disableButton(prevButton);
    } else {
        enableButton(prevButton);
    }

    if (pageCount === currentPage) {
        disableButton(nextButton);
    } else {
        enableButton(nextButton);
    }
};

const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
            button.classList.add("active");
        }
    });
};

const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
    }
};

const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    handlePageButtonsStatus();

    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
            item.classList.remove("hidden");
        }
    });
};

window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(1);

    prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
    });

    nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
    });

    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
            });
        }
    });
});


const paginationNumbers1 = document.getElementById("pagination-numbers1");
const paginatedList1 = document.getElementById("two");
const listItems1 = paginatedList1.querySelectorAll(".filterDiv");
const nextButton1 = document.getElementById("next-button1");
const prevButton1 = document.getElementById("prev-button1");
const pageCount1 = Math.ceil(listItems1.length / paginationLimit);
let currentPage1 = 1;

const disableButton1 = (button1) => {
    button1.classList.add("disabled");
    button1.setAttribute("disabled", true);
};

const enableButton1 = (button1) => {
    button1.classList.remove("disabled");
    button1.removeAttribute("disabled");
};

const handlePageButtonsStatus1 = () => {
    if (currentPage1 === 1) {
        disableButton1(prevButton1);
    } else {
        enableButton1(prevButton1);
    }

    if (pageCount1 === currentPage1) {
        disableButton1(nextButton1);
    } else {
        enableButton1(nextButton1);
    }
};

const handleActivePageNumber1 = () => {
    document.querySelectorAll(".pagination-number1").forEach((button) => {
        button.classList.remove("active");
        const pageIndex1 = Number(button.getAttribute("page-index"));
        if (pageIndex1 == currentPage1) {
            button.classList.add("active");
        }
    });
};

const appendPageNumber1 = (index) => {
    const pageNumber1 = document.createElement("button");
    pageNumber1.className = "pagination-number1";
    pageNumber1.innerHTML = index;
    pageNumber1.setAttribute("page-index", index);
    pageNumber1.setAttribute("aria-label", "Page " + index);

    paginationNumbers1.appendChild(pageNumber1);
};

const getPaginationNumbers1 = () => {
    for (let i = 1; i <= pageCount1; i++) {
        appendPageNumber1(i);
    }
};

const setCurrentPage1 = (pageNum1) => {
    currentPage1 = pageNum1;

    handleActivePageNumber1();
    handlePageButtonsStatus1();

    const prevRange1 = (pageNum1 - 1) * paginationLimit;
    const currRange1 = pageNum1 * paginationLimit;

    listItems1.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange1 && index < currRange1) {
            item.classList.remove("hidden");
        }
    });
};

window.addEventListener("load", () => {
    getPaginationNumbers1();
    setCurrentPage1(1);

    prevButton1.addEventListener("click", () => {
        setCurrentPage1(currentPage1 - 1);
    });

    nextButton1.addEventListener("click", () => {
        setCurrentPage1(currentPage1 + 1);
    });

    document.querySelectorAll(".pagination-number1").forEach((button) => {
        const pageIndex1 = Number(button.getAttribute("page-index"));

        if (pageIndex1) {
            button.addEventListener("click", () => {
                setCurrentPage1(pageIndex1);
            });
        }
    });
});
const paginationNumbers2 = document.getElementById("pagination-numbers2");
const paginatedList2 = document.getElementById("three");
const listItems2 = paginatedList2.querySelectorAll(".filterDiv");
const nextButton2 = document.getElementById("next-button2");
const prevButton2 = document.getElementById("prev-button2");
const pageCount2 = Math.ceil(listItems2.length / paginationLimit);
let currentPage2 = 1;

const disableButton2 = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

const enableButton2 = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

const handlePageButtonsStatus2 = () => {
    if (currentPage2 === 1) {
        disableButton2(prevButton2);
    } else {
        enableButton2(prevButton2);
    }

    if (pageCount2 === currentPage2) {
        disableButton2(nextButton2);
    } else {
        enableButton2(nextButton2);
    }
};

const handleActivePageNumber2 = () => {
    document.querySelectorAll(".pagination-number2").forEach((button) => {
        button.classList.remove("active");
        const pageIndex2 = Number(button.getAttribute("page-index"));
        if (pageIndex2 == currentPage2) {
            button.classList.add("active");
        }
    });
};

const appendPageNumber2 = (index) => {
    const pageNumber2 = document.createElement("button");
    pageNumber2.className = "pagination-number2";
    pageNumber2.innerHTML = index;
    pageNumber2.setAttribute("page-index", index);
    pageNumber2.setAttribute("aria-label", "Page " + index);

    paginationNumbers2.appendChild(pageNumber2);
};

const getPaginationNumbers2 = () => {
    for (let i = 1; i <= pageCount2; i++) {
        appendPageNumber2(i);
    }
};

const setCurrentPage2 = (pageNum2) => {
    currentPage2 = pageNum2;

    handleActivePageNumber2();
    handlePageButtonsStatus2();

    const prevRange2 = (pageNum2 - 1) * paginationLimit;
    const currRange2 = pageNum2 * paginationLimit;

    listItems2.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange2 && index < currRange2) {
            item.classList.remove("hidden");
        }
    });
};

window.addEventListener("load", () => {
    getPaginationNumbers2();
    setCurrentPage2(1);

    prevButton.addEventListener("click", () => {
        setCurrentPage2(currentPage2 - 1);
    });

    nextButton.addEventListener("click", () => {
        setCurrentPage2(currentPage2 + 1);
    });

    document.querySelectorAll(".pagination-number2").forEach((button) => {
        const pageIndex2 = Number(button.getAttribute("page-index"));

        if (pageIndex2) {
            button.addEventListener("click", () => {
                setCurrentPage2(pageIndex2);
            });
        }
    });
});
const paginationNumbers3 = document.getElementById("pagination-numbers3");
const paginatedList3 = document.getElementById("four");
const listItems3 = paginatedList3.querySelectorAll(".filterDiv");
const nextButton3 = document.getElementById("next-button3");
const prevButton3 = document.getElementById("prev-button3");
const pageCount3 = Math.ceil(listItems3.length / paginationLimit);
let currentPage3 = 1;

const disableButton3 = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

const enableButton3 = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

const handlePageButtonsStatus3 = () => {
    if (currentPage3 === 1) {
        disableButton3(prevButton3);
    } else {
        enableButton3(prevButton3);
    }

    if (pageCount3 === currentPage3) {
        disableButton3(nextButton3);
    } else {
        enableButton3(nextButton3);
    }
};

const handleActivePageNumber3 = () => {
    document.querySelectorAll(".pagination-number3").forEach((button) => {
        button.classList.remove("active");
        const pageIndex3 = Number(button.getAttribute("page-index"));
        if (pageIndex3 == currentPage3) {
            button.classList.add("active");
        }
    });
};

const appendPageNumber3 = (index) => {
    const pageNumber3 = document.createElement("button");
    pageNumber3.className = "pagination-number3";
    pageNumber3.innerHTML = index;
    pageNumber3.setAttribute("page-index", index);
    pageNumber3.setAttribute("aria-label", "Page " + index);

    paginationNumbers3.appendChild(pageNumber3);
};

const getPaginationNumbers3 = () => {
    for (let i = 1; i <= pageCount3; i++) {
        appendPageNumber3(i);
    }
};

const setCurrentPage3 = (pageNum3) => {
    currentPage3 = pageNum3;

    handleActivePageNumber3();
    handlePageButtonsStatus3();

    const prevRange3 = (pageNum3 - 1) * paginationLimit;
    const currRange3 = pageNum3 * paginationLimit;

    listItems3.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange3 && index < currRange3) {
            item.classList.remove("hidden");
        }
    });
};

window.addEventListener("load", () => {
    getPaginationNumbers3();
    setCurrentPage3(1);

    prevButton3.addEventListener("click", () => {
        setCurrentPage3(currentPage3 - 1);
    });

    nextButton3.addEventListener("click", () => {
        setCurrentPage3(currentPage3 + 1);
    });

    document.querySelectorAll(".pagination-number3").forEach((button) => {
        const pageIndex3 = Number(button.getAttribute("page-index"));

        if (pageIndex3) {
            button.addEventListener("click", () => {
                setCurrentPage3(pageIndex3);
            });
        }
    });
});




// Returns an array of maxLength (or less) page numbers
// where a 0 in the returned array denotes a gap in the series.
// Parameters:
//   totalPages:     total number of pages
//   page:           current page
//   maxLength:      maximum size of returned array

// function getPageList(totalPages, page, maxLength) {
//     if (maxLength < 5) throw "maxLength must be at least 5";

//     function range(start, end) {
//         return Array.from(Array(end - start + 1), (_, i) => i + start);
//     }

//     var sideWidth = maxLength < 9 ? 1 : 2;
//     var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
//     var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
//     if (totalPages <= maxLength) {
//         // no breaks in list
//         return range(1, totalPages);
//     }
//     if (page <= maxLength - sideWidth - 1 - rightWidth) {
//         // no break on left of page
//         return range(1, maxLength - sideWidth - 1)
//             .concat([0])
//             .concat(range(totalPages - sideWidth + 1, totalPages));
//     }
//     if (page >= totalPages - sideWidth - 1 - rightWidth) {
//         // no break on right of page
//         return range(1, sideWidth)
//             .concat([0])
//             .concat(
//                 range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
//             );
//     }
//     // Breaks on both sides
//     return range(1, sideWidth)
//         .concat([0])
//         .concat(range(page - leftWidth, page + rightWidth))
//         .concat([0])
//         .concat(range(totalPages - sideWidth + 1, totalPages));
// }

// $(function() {
//     // Number of items and limits the number of items per page
//     var numberOfItems = $("#one .filterDiv").length;
//     var limitPerPage = 8;
//     // Total pages rounded upwards
//     var totalPages = Math.ceil(numberOfItems / limitPerPage);
//     // Number of buttons at the top, not counting prev/next,
//     // but including the dotted buttons.
//     // Must be at least 5:
//     var paginationSize = 5;
//     var currentPage;

//     function showPage(whichPage) {
//         if (whichPage < 1 || whichPage > totalPages) return false;
//         currentPage = whichPage;
//         $("#one .filterDiv")
//             .hide()
//             .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
//             .show();
//         // Replace the navigation items (not prev/next):
//         $(".pagination li").slice(1, -1).remove();
//         getPageList(totalPages, currentPage, paginationSize).forEach(item => {
//             $("<li>")
//                 .addClass(
//                     "page-item " +
//                     (item ? "current-page " : "") +
//                     (item === currentPage ? "active " : "")
//                 )
//                 .append(
//                     $("<a>")
//                     .addClass("page-link")

//                     .text(item || "..")
//                 )
//                 .insertBefore("#next-page");
//         });
//         return true;
//     }

//     // Include the prev/next buttons:
//     $(".pagination").append(
//         $("<li>").addClass("page-item").attr({
//             id: "previous-page"
//         }).append(
//             $("<a><i class='ri-arrow-right-s-line'></i></a>")
//             .addClass("page-link")
//             .attr({
//                 href: "javascript:void(0)"
//             })
//         ),
//         $("<li>").addClass("page-item").attr({
//             id: "next-page"
//         }).append(
//             $("<a><i class='ri-arrow-left-s-line'></i></a>")
//             .addClass("page-link")
//             .attr({
//                 href: "javascript:void(0)"
//             })
//         )
//     );
//     // Show the page links
//     $("#one").show();
//     showPage(1);

//     // Use event delegation, as these items are recreated later
//     $(
//         document
//     ).on("click", ".pagination li.current-page:not(.active)", function() {
//         return showPage(+$(this).text());
//     });
//     $("#next-page").on("click", function() {
//         return showPage(currentPage + 1);
//     });

//     $("#previous-page").on("click", function() {
//         return showPage(currentPage - 1);
//     });
//     $(".pagination").on("click", function() {
//         $("html,body").animate({
//             scrollTop: 0
//         }, 0);
//     });
// });