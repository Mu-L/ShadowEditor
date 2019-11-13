var ID = -1;

/**
 * 工具基类
 * @author tengge / https://github.com/tengge1
 */
class BaseTool {
    constructor() {
        this.id = `EditorTool${ID--}`;
        this.dispatch = d3.dispatch('end');
        this.call = this.dispatch.call.bind(this.dispatch);
        this.on = this.dispatch.on.bind(this.dispatch);
    }

    start() {

    }

    stop() {

    }
}

export default BaseTool;