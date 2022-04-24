<template>
    <div>
        <ol>
            <li>
                <ol>
                <li>sub li element</li>
                <li>sub li element</li>
                <li>sub li element</li>
                </ol>
            </li>
            <li>li element</li>
            <li>li element
                <ol>
                <li>sub li element</li>
                <li>sub li element</li>
                <li>sub li element</li>
                </ol>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name:'r6C'
}
</script>

<style lang="scss" scoped>
.linum{
    list-style: decimal;
}
.litext{
    list-style: lower-alpha;
}
.lidisc{
    list-style: disc;
}
ol { counter-reset: item ;
    li{ display: block }
    li:before { content: counters(item, ".") " "; counter-increment: item }

}
</style>