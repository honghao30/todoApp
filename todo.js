(() => {

    console.log('시작해보ㅓ자')
    
    function getCurrentTime(){
    //오늘 날짜
        let today = new Date();
        let year = today.getFullYear(); // 년도
        let month = today.getMonth() + 1;  // 월 => +1 하는 이유는 월이 0부터 시작하기 때문
        let date = today.getDate();  // 일
        // month가 10보다 작으면 문자 '0'을 추가하는 코드
        month = month >= 10 ? month : '0' + month;
        // date가 10보다 작으면 문자'0'을 추가하는 코드 
        date = date >= 10 ? date : '0' + date;
        let currentDay = `${year}년 ${month}월 ${date}일`;

        var weekday = new Array(7);
        weekday[0] = "일요일";
        weekday[1] = "월요일";
        weekday[2] = "화요일";
        weekday[3] = "수요일";
        weekday[4] = "목요일";
        weekday[5] = "금요일";
        weekday[6] = "토요일";
        
        var dayLabel = weekday[today.getDay()];
        console.log(dayLabel)

        const currentDayWrap = document.querySelector('.data__wrap--top');
        currentDayWrap.innerHTML = `${currentDay} <span>${dayLabel}</span>`;

    }
    getCurrentTime()

    function randomIDGenerator(){
        return Math.random().toString(36).substr(2, 16);
    }
    //고유 아이디 생성

    const taskList = [];

    const AddItem = () => {
        const addItemValue = document.querySelector('.input-todo').value;
        const addItemData = document.querySelector('.data-select').value;
        const task = {
            id:randomIDGenerator(),
            taskContent: document.querySelector('.input-todo').value,
            taskDAtaValue: document.querySelector('.data-select').value,
            //taskDAta: false,
            isComplete:false,
            //isAlert:false
        }

        if(addItemValue == ''){
            alert('할일을 입력하세요');
        }else{
            taskList.push(task);
            //let taskData = document.querySelector('.data-select').value;
            console.log(taskList,addItemValue);
            document.querySelector('.input-todo').value  = null;
            document.querySelector('.data-select').value = null;
        }
        render();
        couterItem();
    }
    const render = () =>  {
        let resultHtml = ``;
        for(let i = 0;i < taskList.length;i++){
            resultHtml += `
            <li>
                <div class="toto-item__wrap">
                    <div class="todo-items">
                        <p>
                            <input type="checkbox" id="${taskList[i].id}">
                            <label for="${taskList[i].id}">${taskList[i].taskContent}</label>
                        </p>
                        <p>${taskList[i].taskDAtaValue}</p>
                    </div>
                    <div class="todo-controll">
                        <button type="button" class="btn-remove">X</button>
                        <button type="button" class="btn-modify">M</button>
                    </div>
                </div>            
            </li> 
            `;            
        }
        document.querySelector('.totolist').innerHTML = resultHtml;
    }

    const couterItem = () => {
        const countElim = document.querySelectorAll("#all ul li");        
        let todoLength = countElim.length;
        const countnumdv = document.querySelector('#all h2 span')
        countnumdv.innerText = todoLength + '개 남음';
    }

    couterItem();



    const btnAddItem = document.querySelector('.btn-todo-save');
    btnAddItem.addEventListener('click',AddItem);





    









})()