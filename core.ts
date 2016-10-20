class DMLJS {

    m_layers: Layer[];

    constructor () {
        this.m_layers = [];
    }

    run (features: number[]): number {
        let current: number[];

        for (var i = 0; i < this.m_layers.length; ++i) {
            current = this.m_layers[i].forwardPass(current);
        }

        return current;
    }

    train (iterations: number, batchSize:number, trainingSet: (number)=>number[], labels: (number)=>number[]) {


    }

    addLayer (layer: Layer) {

    }

}
