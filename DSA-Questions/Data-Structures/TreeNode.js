let nodeData = {
    "data": 10,
    "left": {
        "data": 5,
        "left": {
            "data": 3,
            "left": null,
            "right": null
        },
        "right": {
            "data": 7,
            "left": null,
            "right": null
        }
    },
    "right": {
        "data": 15,
        "left": null,
        "right": null
    }
}

const addNode = (node, newNode) => {
    if (node === null) {
        return newNode;
    }

    if (newNode.data < node.data) {
        node.left = addNode(node.left, newNode);
    } else {
        node.right = addNode(node.right, newNode);
    }

    return node;
}

const traverse = (node) => {
    if (node === null) {
        return;
    }

    console.log(node.data);
    traverse(node.left);
    traverse(node.right);
}

const deleteNode = (node, data) => {
    if (node === null) {
        return null;
    }

    if (data < node.data) {
        node.left = deleteNode(node.left, data);
    } else if (data > node.data) {
        node.right = deleteNode(node.right, data);
    } else {
        if (node.left === null && node.right === null) {
            return null;
        }

        if (node.left === null) {
            return node.right;
        }

        if (node.right === null) {
            return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left !== null) {
            tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = deleteNode(node.right, tempNode.data);
    }

    return node;
}

let objectNode = {
    "data": 4,
    "left": null,
    "right": null
}

let newNodeData = addNode(nodeData, objectNode)
traverse(newNodeData)
newNodeData = deleteNode(newNodeData, 5)
console.log(newNodeData)

// Time Complexity: O(log n)
// Space Complexity: O(1)