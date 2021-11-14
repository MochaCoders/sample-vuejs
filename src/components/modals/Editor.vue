<template>
    <a-modal 
    title="Notes"
        :visible="visible"
         
       >
    <Editor 
    :options="editorOptions"
    height="300px"
    initialEditType="wysiwyg"
    previewStyle="vertical"
    />
    </a-modal>
</template>
<script>
import { Editor } from "@toast-ui/vue-editor";
export default {
name:"Editor",
components: {
    Editor
},
data() {
    return{
        editorOptions: {
          hideModeSwitch: true
      },
    }
}
}
</script>
