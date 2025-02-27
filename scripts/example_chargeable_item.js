function onUse(event, itemStack){
    var onUseItem = event.getItem();
    itemStack.setItemCharge(onUseItem, 0);
}

// function onUse(event, itemStack) {
//     var player = event.getPlayer();
//     var onUseItem = event.getItem();

//     try {
//         // 确保 itemStack 是 org.bukkit.inventory.ItemStack 类型
//         if (onUseItem instanceof Java.type('org.bukkit.inventory.ItemStack')) {
//             // 设置物品充电值为 0
//             // 注意：使用 int 类型的参数来匹配方法签名
//             itemStack.setItemCharge(onUseItem, 0); // 如果需要使用 float 或 double，请相应调整
//             player.sendMessage("§a成功设置电量为 0！");
//         } else {
//             player.sendMessage("§c错误：传入的不是有效的 ItemStack。");
//         }
//     } catch (error) {
//         player.sendMessage("§c发生错误：" + error.message);
//         console.error("Error in setItemCharge:", error);
//     }
// }