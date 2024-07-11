import logo from "./logo.svg";
import "./App.css";
import "./reset.css";
import { useState } from "react";

function App() {
    const [myMoney, setMyMoney] = useState(0);

    return (
        <div className="App">
            <div className="vending-area">
                <ul>
                    {/*음료 리스트 */}
                    <li>
                        {/* 아이템 */}
                        <em>
                            <img src=""></img>
                        </em>
                        {/* img 넒이 높이 100% 그걸 감싸는 em에다가 고정사이즈 */}
                        <span>콜라</span> {/* margin-left 15px */}
                        <strong>1000원</strong>
                        {/* display:block; margin-left:auto; */}
                    </li>
                </ul>
                <div className="money-area">
                    <div className="money-box">
                        <span>잔액:</span>
                        <span className="strong">2500원</span>
                    </div>
                </div>
                <button>거스름돈 반환</button>
                <div>
                    <input type="text" />
                </div>
                <button>입금</button>
                <div className="get-cola-area">
                    {/* 스크롤 영역 */}
                    <ul>
                        {/* 리스트 */}
                        <li>
                            {/* 아이템 */}
                            <em>
                                <img src=""></img>
                            </em>
                            {/* img 넒이 높이 100% 그걸 감싸는 em에다가 고정사이즈 */}
                            <span>2</span> {/* margin-left 15px */}
                            <strong>3</strong>
                            {/* display:block; margin-left:auto; */}
                        </li>
                    </ul>
                </div>
                <button>획득</button>
            </div>
            <div>
                2
                <div>
                    <span>소지금:</span>
                    <span>2500원</span>
                </div>
            </div>
            <div>
                {/* 배경 */}
                <h3>획득한 음료</h3>
                <div>
                    {/* 스크롤 영역 */}
                    <ul>
                        {/* 리스트 */}
                        <li>
                            {/* 아이템 */}
                            <em>
                                <img src=""></img>
                            </em>
                            {/* img 넒이 높이 100% 그걸 감싸는 em에다가 고정사이즈 */}
                            <span>2</span> {/* margin-left 15px */}
                            <strong>3</strong>
                            {/* display:block; margin-left:auto; */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
