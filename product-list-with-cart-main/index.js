// minusButtons을 클릭하면 numElement.textContent의 값이 -1된다.
function handleMinusClick(event) {
  const quantity = event.target.closest(".quantitySelector");
  const numElement = quantity.querySelector(".num");
  let num = parseInt(numElement.textContent);
  if (num > 0) {
    numElement.textContent = num - 1;
  }
}

// plusButtons을 클릭하면 numElement.textContent의 값이 +1 된다.
function handlePlusClick(event) {
  const quantity = event.target.closest(".quantitySelector");
  const numElement = quantity.querySelector(".num");
  let num = parseInt(numElement.textContent);
  numElement.textContent = num + 1;
}

// 수량 버튼 변수
const minusButtons = document.querySelectorAll(".minus");
const plusButtons = document.querySelectorAll(".plus");

///이벤트

minusButtons.forEach((button) => {
  button.addEventListener("click", handleMinusClick);
});

plusButtons.forEach((button) => {
  button.addEventListener("click", handlePlusClick);
});

// Add to Cart 이벤트 변수
const addCartBtns = document.querySelectorAll(".addCart");
const orderContainer = document.querySelector(".orderContainer");
// Add to Cart 클릭시 버튼 전환
addCartBtns.forEach((addCartBtn) => {
  addCartBtn.addEventListener("click", (event) => {
    const quantitySelector =
      event.currentTarget.querySelector(".quantitySelector");
    quantitySelector.style.display = "flex";
    // orderContainer 안의 요소들 없애기.
    orderContainer.style.display = "none";
  });
});

const orderContainer2 = document.querySelector(".orderContainer2");
// Add to Cart 버튼눌렀을때 Your Cart로 상품 옮기는 함수
addCartBtns.forEach((addCartBtn) => {
  addCartBtn.addEventListener("click", (event) => {
    // orderContainer 요소 생성(이름, 수량, 가격)
    const orderName = event.target.closest(".item").querySelector(".name");
    let quantity = event.target.closest(".item").querySelector(".num");
    const price = event.target.closest(".item").querySelector(".price");
    // div태그
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    div1.setAttribute("class", "itemBox1");
    div2.setAttribute("class", "itemBox2");
    div3.setAttribute("class", "itemBox3");
    p1.setAttribute("class", "itemName");
    p2.setAttribute("class", "itemNum");
    p3.setAttribute("class", "itemPrice");

    //중복 확인하는 로직
    let duplicate = false;
    const orederContainer2_lists = orderContainer2.querySelectorAll(
      ".itemBox1 .itemName"
    );
    orederContainer2_lists.forEach((list) => {
      if (list.textContent === orderName.textContent) duplicate = true;
    });
    // 중복 확인
    if (!duplicate) {
      orderContainer2.appendChild(div1);
      div1.setAttribute("id", `${orderName.textContent}`);
      div1.appendChild(div2);
      p1.innerHTML = orderName.textContent;
      div2.appendChild(p1);
      div2.appendChild(div3);
      p2.innerHTML = quantity.textContent + "x";
      div3.appendChild(p2);
      p3.innerHTML = price.textContent;
      div3.appendChild(p3);
    }
  });
});

//플러스 또는 마이너스 버튼을 누를때마다 수량이 바뀌고 총합 가격도 바뀌어야 함.
