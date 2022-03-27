import dummy from "../db/data.json"
import { useParams } from "react-router-dom";
import Word from "./Word";

export default function Header() {

    // App에서 :day의 변수명에 들어가는 값을 useParams를 사용하여 받아올 수 있다.
    const useParam = useParams();

    const day = useParam.day;

    // const day = 1;
    const wordList = dummy.words.filter(word =>(
        word.day == Number(day)));
        // console.log(wordList);

    return <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordList.map(word => (
                    <Word word={word} key={word.id} />
                ))}
            </tbody>
        </table>
    </>
}