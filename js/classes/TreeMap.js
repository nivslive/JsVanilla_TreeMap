export class TreeMap {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
    }

    update(data) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        const totalValue = data.reduce((acc, d) => acc + d.value, 0);
        this.create(data, 40, 20, this.width - 80, this.height - 60, totalValue);
    }

    create(data, x, y, width, height, totalValue) {
        data.sort((a, b) => b.value - a.value);

        let currentX = x;
        let currentY = y;

        data.forEach((d, i) => {
            const area = (d.value / totalValue) * (width * height);
            const orientation = Math.floor(Math.random() * 2);

            let barWidth, barHeight;

            if (orientation === 0) {
                barWidth = width;
                barHeight = area / barWidth;
            } else {
                barHeight = height;
                barWidth = area / barHeight;
            }

            if (barWidth > width) {
                barWidth = width;
                barHeight = area / barWidth;
            }

            if (barHeight > height) {
                barHeight = height;
                barWidth = area / barHeight;
            }
            // Verifique se as dimensões estão corretas
            console.log(`Renderizando ${d.name}: largura ${barWidth}, altura ${barHeight}`);

            this.ctx.fillStyle = `hsl(${i * 360 / data.length}, 70%, 50%)`;
            this.ctx.fillRect(currentX, currentY, barWidth, barHeight);

            this.ctx.fillStyle = 'white';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(d.name, currentX + barWidth / 2, currentY + barHeight / 2);

            if (orientation === 0) {
                currentY += barHeight;
            } else {
                currentX += barWidth;
            }
        });
    }
}
