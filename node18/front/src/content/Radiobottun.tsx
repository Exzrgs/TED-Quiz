import React, { useState } from "react";

/** ラジオボタン設定 */
interface Radio {
    label: string
    value: string
}

const RadioButton = ({selects,whichAnswer,onSelect}) => {
    /** 選択中のラジオボタンvalue */
    const [selected, setSelected] = useState("");
    /** ラジオボタン切り替えイベント */
    const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelected(event.target.value);
        onSelect(whichAnswer, event.target.value); // onSelect を呼び出して選択された値を更新
      };    /** ラジオボタン */
    const radioButtons: Radio[] = [
        {
            label: selects[whichAnswer].answer_options.first,
            value: "first"
        },
        {
            label: selects[whichAnswer].answer_options.second,
            value: "second"
        },
        {
            label: selects[whichAnswer].answer_options.third,
            value: "third"
        }
        ,
        {
            label: selects[whichAnswer].answer_options.fourth,
            value: "fourth"
        }
    ]

    return (
        <div className="container form-check">
            <div>{selects[whichAnswer].problem_statement}</div>
            <div className="d-flex flex-wrap justify-content-start">
            {radioButtons.map((radio, index) => {
                const inputName = `answer_group_${whichAnswer}`;
                return (
                    <div className="d-flex align-items-center m-2" key={index}>
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name={inputName} 
                            id={`radio_${whichAnswer}_${index}`} // 各ラジオボタンに一意のIDを割り当てる
                            value={radio.value} 
                            checked={radio.value === selected} 
                            onChange={changeValue} 
                        />
                        <label 
                            className="form-check-label ms-2" 
                            htmlFor={`radio_${whichAnswer}_${index}`}> {/* `htmlFor`属性でラベルを入力に関連付ける */}
                            <span className="fs-6">{radio.label}</span>
                        </label>
                    </div>
                )
            })}
            </div>
            <div>You've selected {selected}.</div>
        </div>
    )
    }
export default RadioButton;
