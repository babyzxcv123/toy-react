import{createElement,Component,render} from "./toy-react"

class MyComponent extends Component {
    render(){
        return <div>
            <h1>my Component</h1>
            {this.children}
        </div>
    }
}

//babel jsx transform 将div转换成createElement 这个其实调用的是createElement
render(<MyComponent id="a" class="c">
    <div>abc</div>
    <div></div>
    <div></div>
</MyComponent>,document.body);