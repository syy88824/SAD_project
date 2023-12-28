# SAD_project

## Brand.html

* 品牌方看到的介面
* 每筆訂單資料可以看到"訂單編號", "負責生產的供應商", "訂單狀態"
```sh
訂單狀態說明：
1."Preparing"：下訂單~供應商生產完成以前
2."Order complete"：供應商點擊"Production complete"按鈕之後，品牌方狀態會更改為此
3."Document incorrect"：若在兩次掃描檔核對中有任一次出現問題，此訂單會由狀態2改為此狀態，並通知品牌方訂單狀態有所更改。若掃描檔皆未出現問題，訂單狀態維持狀態2
```
* 能夠向供應商授權新商品(下訂單)：

```sh
<Button name="add" class="btnAspect fontBold fixed" id="myButton" style="color: gray; background-color:#F0EAD6;">ADD</Button>
```
點擊後連結到Add.html
* js = "add.js" , css = "brand.css"

## SuppliertoB.html
* 供應商看到品牌方對其的商品授權的介面
* 透過此select，供應商可切換查看品牌方和暢貨中心分別發派的訂單：

```sh
<select name="aspect" class="btnAspect fontBold fixed" id="aspectChange">
     <option value="brand" class="optAspect fontRegular" selected="selected">Brand</option>
     <option value="outlet" class="optAspect fontRegular">Outlet</option>
</select>
```
* 每筆訂單資料可以看到"訂單編號", "授權的品牌方", "訂單狀態"
```sh
訂單狀態說明：
1.Button "Production complete"：供應商收到訂單~生產完成以前
2."Order complete"：點擊"Production complete"按鈕之後，狀態會更改為此不變
```
* js = "supplier.js" , css = "brand.css"

## SuppliertoO.html
* 供應商看到暢貨中心下的訂單的介面
* 每筆訂單資料可以看到"訂單編號", "下單的暢貨中心", "訂單狀態"
```sh
訂單狀態說明：
1. Upload file：供應商收到訂單~生產完成以前
2."Document checking"：商品過完RFID reader之後，上傳檔案以後自動開始核對檔案時的狀態
3-1."Order complete"：狀態2結束後，若兩份檔案的核對結果通過，此訂單會變為此狀態
3-1-1."Order failed"：暢貨中心進貨時核對掃描檔未通過，商品無法出貨
3-2."Document incorrect"：狀態2結束後，若兩份檔案的核對結果不通過，此訂單會變為此狀態，品牌方以及暢貨中心方的訂單狀態也會有所更改
```
* 掃描檔核對失敗的話(狀態3-2)，可透過此鍵向品牌方傳達核對失敗原因：

```sh
<button type="submit" class="btnUpload fontRegular" id="btnReason">Reason</button>
```
* js = "supplier.js" , css = "brand.css"

## Outlet.html
* 暢貨中心看到的介面
* 每筆訂單資料可以看到"訂單編號", "生產的供應商", "訂單狀態"
```sh
訂單狀態說明：
1."Preparing"：暢貨中心送出訂單且有品牌方授權供應商生產~供應商生產完成以前
2-1."In transit"：供應商出貨以前核對的掃描檔有通過，且商品正在被運往暢貨中心
2-2."Order failed"：供應商出貨前核對掃描檔未通過，商品無法出貨
3.Upload file：商品抵達暢貨中心~商品掃RFID reader以前
4."Document checking"：商品過完RFID reader之後，上傳檔案以後自動開始核對檔案時的狀態
5-1."Order complete"：狀態4結束後，若兩份檔案的核對結果通過，此訂單會變為此狀態
5-2."Document incorrect"：狀態4結束後，若兩份檔案的核對結果不通過，此訂單會變為此狀態，品牌方和供應商的訂單狀態也會有所更改
```
* 能夠向供應商下訂單：

```sh
<Button name="add" class="btnAspect fontBold fixed" id="myButton" style="color: gray; background-color:#F0EAD6;">ADD</Button>
```
* js = "supplier.js" , css = "brand.css"

## 備註
* 此處僅寫出前端頁面，無連接後端資料庫，故訂單間的狀態串聯尚未能夠實現
* 此處無法串聯硬體設備(RFID reader)，故以setTimeout帶過一些流程
