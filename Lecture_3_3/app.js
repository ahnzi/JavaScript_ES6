// const styled = css => console.log(css);

// styled (`border-radius:10px;
// color:blue`);

// styled `border-radius:10px;
// color:blue`;

// const styled = aElement => {
//     const el = document.createElement(aElement);
//     return ()
// };

// const title = styled("h1")`
//     border-radius: 10px;
//     color: blue;
// `;
// console.log(title);

// const styled = aElement => {
//     const el = document.createElement(aElement);
//     return (args => {
// 		console.log(args[0]);
// 	});
// };

// const title = styled("h1")`
//     border-radius: 10px;
//     color: blue;
// `;
// console.log(title);

const styled = aElement => {
    const el = document.createElement(aElement);
    return (args => {
        const styles = args[0];
        el.style = styles;
        return el;
    });
};

// const title = styled("h1")`
//     border-radius: 10px;
//     color: blue;
// `;
// console.log(title);


const title = styled("h1")`
    background-color: red;
    color: blue;
`;

const subTitle = styled("span")`
    color: green;
`;

title.innerText = "We just cloned";
subTitle.innerText = "Styled Components";

document.body.append(title, subTitle);