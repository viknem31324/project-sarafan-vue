<template>
    <button :class="classes" :type="type" @click="onClick">
        {{ label }}
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset';
  label: string;
  variant?: 'accent' | 'secondary' | 'ghost';
}>(), {
  type: 'button',
  variant: 'accent',
});

const emit = defineEmits<{

}>();

const classes = computed(() => {
    return {
        'app-button': true,
        [`app-button--${props.variant}`]: true,
    }
});

const onClick = () => {
    
};
</script>

<style lang="scss">
.app-button {
    padding: 8px 20px;
    color: black;
    background-color: transparent;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: all ease-in-out .3s;

    &--accent {
        color: white;
        background-color: rgb(131, 189, 45);

        &:hover {
            opacity: .8;
        }
    }

    &--secondary {
        border: 1px solid black;
        color: black;

        &:hover {
            color: white;
            background-color: black;
        }
    }
}
</style>