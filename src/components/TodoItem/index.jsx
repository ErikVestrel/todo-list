function TodoItem({text, completed}) {

    return (
        <li className={completed? 'true' : 'false'}>
            <span>v</span>
            <p>{text}</p>
            <span>x</span>
        </li>
    );
}

export { TodoItem }



