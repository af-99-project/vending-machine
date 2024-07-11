import logo from "./logo.svg";
import "./App.css";
import "./reset.css";
import { useState } from "react";
import cola from "./콜라.png";
function App() {
    const [myMoney, setMyMoney] = useState(0);
    const list = [1, 2, 3, 4, 5, 6];
    return (
        <div className="App">
            <div className="vending-area">
                <ul className="cola-list">
                    {/*음료 리스트 */}
                    {list.map(() => (
                        <li className="cola-item">
                            {/* 아이템 */}
                            <em>
                                <img src={cola}></img>
                            </em>
                            {/* img 넒이 높이 100% 그걸 감싸는 em에다가 고정사이즈 */}
                            <span className="title">Original_Cola</span>{" "}
                            {/* margin-left 15px */}
                            <strong className="cost">1000원</strong>
                            {/* display:block; margin-left:auto; */}
                        </li>
                    ))}
                </ul>
                <div className="vending-wrap">
                    <div className="money-box">
                        <span>잔액:</span>
                        <span className="strong">2500원</span>
                    </div>
                    <button className="change-btn">거스름돈 반환</button>
                    <div>
                        <input
                            type="text"
                            className="send-input"
                            placeholder="입금액 입력"
                        />
                    </div>
                    <button className="change-btn">입금</button>
                    <div className="get-cola-area-mini">
                        {/* 배경 */}
                        <div className="get-cola-box">
                            {/* 스크롤 영역 */}
                            <ul>
                                {/* 리스트 */}
                                <li className="cola-box ">
                                    {/* 아이템 */}
                                    <em>
                                        <img src={cola}></img>
                                    </em>
                                    {/* img 넒이 높이 100% 그걸 감싸는 em에다가 고정사이즈 */}
                                    <span>Original_Cola</span>{" "}
                                    {/* margin-left 15px */}
                                    <strong className="count">3</strong>
                                    {/* display:block; margin-left:auto; */}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="get-btn">획득</button>
                </div>
            </div>
            <div className="money-area">
                <div className="money-box">
                    <span>소지금:</span>
                    <span className="strong">2500원</span>
                </div>
            </div>
            <div className="get-cola-area">
                {/* 배경 */}
                <h3 className="strong title">획득한 음료</h3>
                <div className="get-cola-box cont">
                    {/* 스크롤 영역 */}
                    <ul>
                        {/* 리스트 */}
                        <li className="cola-box ">
                            {/* 아이템 */}
                            <em>
                                <img src={cola}></img>
                            </em>
                            {/* img 넒이 높이 100% 그걸 감싸는 em에다가 고정사이즈 */}
                            <span>Original_Cola</span> {/* margin-left 15px */}
                            <strong className="count">3</strong>
                            {/* display:block; margin-left:auto; */}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
