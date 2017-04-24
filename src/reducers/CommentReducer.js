import { ADD_COMMENT, ADD_CHILD_COMMENT } from '../actions/types'

const initialState = {
    data: [],
    done: false
}

export default commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            const { index } = action;
            if (index.length == 1) {
                let comment = { data: action.data, index: index[0], level: index.length - 1 }
                let data = [...state.data, comment];
                data.sort((a, b) => a.index - b.index);
                // console.log(data);
                return { ...state, data: data };
            }
            else {
                const level = index.length - 1;

                /* đối tượng comment gồm 2 phần: root: dữ liệu của nó và child là mảng các comment con*/
                //  lấy mảng các comment con.
                let depth = [];
                depth[0] = [...state.data];

                for (let i = 1; i < level; i++) {
                    depth[i] = depth[i - 1][index[i - 1]].data.child;
                }

                // cập nhật nội dung comment

                // Lấy comment sẽ thêm nút con
                let commentParent = depth[level - 1][index[level - 1]];
                let dataParent = commentParent.data;
                let indexParent = commentParent.index;
                let levelParent = commentParent.level;

                //  lấy dữ liệu nút đó
                let root = dataParent.root ? dataParent.root : dataParent;
                let child = dataParent.child || [];
                // console.log('before',comment);
                commentChild = { data: action.data, index, level }
                child.push(commentChild);
                child.sort((a, b) => (a.index[level] - b.index[level]))
                // console.log('child before', child);
                depth[level - 1][index[level - 1]] = { data: { root, child }, index: indexParent, level: levelParent };
                // console.log('log');
                i = level - 2;
                while (i > 0) {
                    rootParent = depth[i][index[i]].data.root ? depth[i][index[i]].data.root : depth[i][index[i]].data;
                    indexParent = depth[i][index[i]].index;
                    depth[i][index[i]] = {
                        data: {
                            root: rootParent,
                            child: depth[i + 1].map((item) => item)
                        },
                        index: indexParent,
                        level: depth[i][index[i]].level
                    }
                    i--;
                }
                // console.log('state', depth);
                return { ...state, data: depth[0] }
            }

            case 'RESET_COMMENT':
            return {...state, data: []}
        default:
            return state;
    }
}