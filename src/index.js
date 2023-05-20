// タスク追加ボタン関数
const onClickAdd = () => {
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    createIncompleteList(inputText);
};
// 未完了リストを追加する関数
const createIncompleteList = (target) => {
    //divを生成
    const div = document.createElement("div");
    div.className = "list-row";

    //div直下のliを生成
    const li = document.createElement("li");
    li.innerText = target;

    //div直下の完了buttonを作成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        
        //タスクのliタグの文字列を格納
        const addTarget = completeButton.parentNode;
        const text = addTarget.firstElementChild.innerText;

        //タスクを未完了エリアから削除
        deleteFromIncompleteList(addTarget);

        // ターゲット内のコンテンツを初期化
        addTarget.textContent = null;

        // 新しいターゲットの作成
        // liを生成
        const li = document.createElement("li");
        li.innerText = text;
        // buttonを生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        //ボタンが押された時、未完了エリアへ戻す。
        backButton.addEventListener("click", () => {
            // 戻すターゲットを指定
            const backTarget = backButton.parentNode;
            // ターゲットのインナーテキストを取得
            const text = backTarget.firstElementChild.innerText;
            // 未完了エリアへ追加
            createIncompleteList(text);
            // 完了エリアから削除
            document.getElementById("complete-list").removeChild(backTarget);

        });

        // ターゲット内を更新
        addTarget.appendChild(li);
        addTarget.appendChild(backButton);

        //タスクを完了エリアへ追加
        document.getElementById("complete-list").appendChild(addTarget);
    });
    //div直下の削除buttonを作成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.className = "delete-button";
    deleteButton.addEventListener("click", () => {
        // タスクの削除処理
        // 削除処理の実装
        deleteFromIncompleteList(deleteButton.parentNode);
        
    });
    //divの中にliを追記
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //ulタグの中にdivを追記
    document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから削除する関数
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
};

document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
