<script>
	import { createEditor } from 'svelte-editorjs';
	// @ts-ignore
	import * as Header from '@editorjs/header';
	import * as Tables from '@editorjs/table';
	import * as Lists from '@editorjs/list';
	import * as Embed from '@editorjs/embed';
	import * as Codes from '@editorjs/code';
	import * as Paragraph from '@editorjs/paragraph';
	import * as Quote from '@editorjs/quote';
	import * as TextVatientTrue from '@editorjs/text-variant-tune';
	import * as SimpleImage from '@editorjs/simple-image';

	const { editor, data, isReady } = createEditor({
		tools: {
			header: Header,
			table: Tables,
			list: Lists,
			embed: Embed,
			code: Codes,
			paragraph: {
				class: Paragraph,
				inlineToolbar: true
			},
			quote: Quote,
            textVariant: TextVatientTrue,
            image: SimpleImage,
		}
	});
</script>

<div use:editor />

<style>
	:root {
		font-family: 'Albert Sans', sans-serif;
	}
</style>
