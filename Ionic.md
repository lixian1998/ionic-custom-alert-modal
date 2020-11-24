# Ionic

## 1 基于ion-modal自定义alert弹出框

### 1.1 步骤

> 1. 在全局css样式文件（global.scss）中定义弹出框css样式
>
>    ```css
>    .customModal {
>      --background: var(
>        --ion-overlay-background-color,
>        var(--ion-color-step-100, #f9f9f9)
>      );
>      --max-width: 270px;
>      --backdrop-opacity: var(--ion-backdrop-opacity, 0.3);
>      --min-width: 250px;
>      --width: auto;
>      --min-height: auto;
>      --height: 50%;
>      --max-height: 100%;
>    }
>    ```
>
>    
>
> 2. 创建组件
>
>    命令：
>
>    ```
>    ionic g component components/customModal
>    ```
>
>    
>
> 3. 调用方法
>
>    ```typescript
>    async presentModal() {
>           const modal = await this.modalController.create({
>             component: ModalPage,
>             cssClass: 'customModal'
>           });
>           return await modal.present();
>         }
>    ```
>
>    

### 1.2 参考案例