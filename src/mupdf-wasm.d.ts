export default libmupdf_wasm
declare function libmupdf_wasm(): Promise<Libmupdf>
type Pointer = number
interface Libmupdf {
	UTF8ToString(ptr: Pointer): string,
	stringToUTF8(str: string, outPtr: Pointer, maxBytesToWrite: number): number,
	lengthBytesUTF8(str: string): number,
	HEAP8: Int8Array,
	HEAP16: Int16Array,
	HEAPU8: Uint8Array,
	HEAPU16: Uint16Array,
	HEAP32: Int32Array,
	HEAPU32: Uint32Array,
	HEAPF32: Float32Array,
	HEAPF64: Float64Array,

	_wasm_init_context(): void,
	_wasm_malloc(size: number): Pointer,
	_wasm_free(p: Pointer): void,
	_wasm_enable_icc(): void,
	_wasm_disable_icc(): void,
	_wasm_set_user_css(text: Pointer): void,
	_wasm_keep_buffer(p: Pointer): Pointer,
	_wasm_drop_buffer(p: Pointer): void,
	_wasm_keep_stream(p: Pointer): Pointer,
	_wasm_drop_stream(p: Pointer): void,
	_wasm_keep_colorspace(p: Pointer): Pointer,
	_wasm_drop_colorspace(p: Pointer): void,
	_wasm_keep_pixmap(p: Pointer): Pointer,
	_wasm_drop_pixmap(p: Pointer): void,
	_wasm_keep_font(p: Pointer): Pointer,
	_wasm_drop_font(p: Pointer): void,
	_wasm_keep_stroke_state(p: Pointer): Pointer,
	_wasm_drop_stroke_state(p: Pointer): void,
	_wasm_keep_image(p: Pointer): Pointer,
	_wasm_drop_image(p: Pointer): void,
	_wasm_keep_shade(p: Pointer): Pointer,
	_wasm_drop_shade(p: Pointer): void,
	_wasm_keep_path(p: Pointer): Pointer,
	_wasm_drop_path(p: Pointer): void,
	_wasm_keep_text(p: Pointer): Pointer,
	_wasm_drop_text(p: Pointer): void,
	_wasm_keep_device(p: Pointer): Pointer,
	_wasm_drop_device(p: Pointer): void,
	_wasm_keep_display_list(p: Pointer): Pointer,
	_wasm_drop_display_list(p: Pointer): void,
	_wasm_drop_stext_page(p: Pointer): void,
	_wasm_drop_document_writer(p: Pointer): void,
	_wasm_drop_outline_iterator(p: Pointer): void,
	_wasm_keep_document(p: Pointer): Pointer,
	_wasm_drop_document(p: Pointer): void,
	_wasm_keep_page(p: Pointer): Pointer,
	_wasm_drop_page(p: Pointer): void,
	_wasm_keep_link(p: Pointer): Pointer,
	_wasm_drop_link(p: Pointer): void,
	_wasm_keep_outline(p: Pointer): Pointer,
	_wasm_drop_outline(p: Pointer): void,
	_wasm_pdf_keep_annot(p: Pointer): Pointer,
	_wasm_pdf_drop_annot(p: Pointer): void,
	_wasm_pdf_keep_obj(p: Pointer): Pointer,
	_wasm_pdf_drop_obj(p: Pointer): void,
	_wasm_pdf_keep_graft_map(p: Pointer): Pointer,
	_wasm_pdf_drop_graft_map(p: Pointer): void,
	_wasm_buffer_get_data(p: Pointer): Pointer,
	_wasm_buffer_get_len(p: Pointer): number,
	_wasm_colorspace_get_type(p: Pointer): number,
	_wasm_colorspace_get_n(p: Pointer): number,
	_wasm_colorspace_get_name(p: Pointer): Pointer,
	_wasm_pixmap_get_w(p: Pointer): number,
	_wasm_pixmap_get_h(p: Pointer): number,
	_wasm_pixmap_get_x(p: Pointer): number,
	_wasm_pixmap_get_y(p: Pointer): number,
	_wasm_pixmap_get_n(p: Pointer): number,
	_wasm_pixmap_get_stride(p: Pointer): number,
	_wasm_pixmap_get_alpha(p: Pointer): number,
	_wasm_pixmap_get_xres(p: Pointer): number,
	_wasm_pixmap_get_yres(p: Pointer): number,
	_wasm_pixmap_get_colorspace(p: Pointer): Pointer,
	_wasm_pixmap_get_samples(p: Pointer): Pointer,
	_wasm_pixmap_set_xres(p: Pointer, v: number): void,
	_wasm_pixmap_set_yres(p: Pointer, v: number): void,
	_wasm_font_get_name(p: Pointer): Pointer,
	_wasm_stroke_state_get_start_cap(p: Pointer): number,
	_wasm_stroke_state_set_start_cap(p: Pointer, v: number): void,
	_wasm_stroke_state_get_dash_cap(p: Pointer): number,
	_wasm_stroke_state_set_dash_cap(p: Pointer, v: number): void,
	_wasm_stroke_state_get_end_cap(p: Pointer): number,
	_wasm_stroke_state_set_end_cap(p: Pointer, v: number): void,
	_wasm_stroke_state_get_linejoin(p: Pointer): number,
	_wasm_stroke_state_set_linejoin(p: Pointer, v: number): void,
	_wasm_stroke_state_get_linewidth(p: Pointer): number,
	_wasm_stroke_state_set_linewidth(p: Pointer, v: number): void,
	_wasm_stroke_state_get_miterlimit(p: Pointer): number,
	_wasm_stroke_state_set_miterlimit(p: Pointer, v: number): void,
	_wasm_stroke_state_get_dash_phase(p: Pointer): number,
	_wasm_stroke_state_set_dash_phase(p: Pointer, v: number): void,
	_wasm_image_get_w(p: Pointer): number,
	_wasm_image_get_h(p: Pointer): number,
	_wasm_image_get_n(p: Pointer): number,
	_wasm_image_get_bpc(p: Pointer): number,
	_wasm_image_get_xres(p: Pointer): number,
	_wasm_image_get_yres(p: Pointer): number,
	_wasm_image_get_imagemask(p: Pointer): boolean,
	_wasm_image_get_colorspace(p: Pointer): Pointer,
	_wasm_image_get_mask(p: Pointer): Pointer,
	_wasm_outline_get_title(p: Pointer): Pointer,
	_wasm_outline_get_uri(p: Pointer): Pointer,
	_wasm_outline_get_next(p: Pointer): Pointer,
	_wasm_outline_get_down(p: Pointer): Pointer,
	_wasm_outline_get_is_open(p: Pointer): boolean,
	_wasm_outline_item_get_title(p: Pointer): Pointer,
	_wasm_outline_item_get_uri(p: Pointer): Pointer,
	_wasm_outline_item_get_is_open(p: Pointer): boolean,
	_wasm_link_get_rect(p: Pointer): Pointer,
	_wasm_link_get_uri(p: Pointer): Pointer,
	_wasm_link_get_next(p: Pointer): Pointer,
	_wasm_stext_page_get_mediabox(p: Pointer): Pointer,
	_wasm_stext_page_get_first_block(p: Pointer): Pointer,
	_wasm_stext_block_get_next(p: Pointer): Pointer,
	_wasm_stext_block_get_type(p: Pointer): number,
	_wasm_stext_block_get_bbox(p: Pointer): Pointer,
	_wasm_stext_block_get_first_line(p: Pointer): Pointer,
	_wasm_stext_block_get_transform(p: Pointer): Pointer,
	_wasm_stext_block_get_image(p: Pointer): Pointer,
	_wasm_stext_line_get_next(p: Pointer): Pointer,
	_wasm_stext_line_get_wmode(p: Pointer): number,
	_wasm_stext_line_get_dir(p: Pointer): Pointer,
	_wasm_stext_line_get_bbox(p: Pointer): Pointer,
	_wasm_stext_line_get_first_char(p: Pointer): Pointer,
	_wasm_stext_char_get_next(p: Pointer): Pointer,
	_wasm_stext_char_get_c(p: Pointer): number,
	_wasm_stext_char_get_origin(p: Pointer): Pointer,
	_wasm_stext_char_get_quad(p: Pointer): Pointer,
	_wasm_stext_char_get_size(p: Pointer): number,
	_wasm_stext_char_get_font(p: Pointer): Pointer,
	_wasm_pdf_embedded_file_params_get_filename(p: Pointer): Pointer,
	_wasm_pdf_embedded_file_params_get_mimetype(p: Pointer): Pointer,
	_wasm_pdf_embedded_file_params_get_size(p: Pointer): number,
	_wasm_pdf_embedded_file_params_get_created(p: Pointer): number,
	_wasm_pdf_embedded_file_params_get_modified(p: Pointer): number,
	_wasm_pdf_page_get_obj(p: Pointer): Pointer,
	_wasm_new_buffer(capacity: number): Pointer,
	_wasm_new_buffer_from_data(data: Pointer, size: number): Pointer,
	_wasm_append_string(buf: Pointer, str: Pointer): void,
	_wasm_append_byte(buf: Pointer, c: number): void,
	_wasm_append_buffer(buf: Pointer, src: Pointer): void,
	_wasm_slice_buffer(buf: Pointer, start: number, end: number): Pointer,
	_wasm_string_from_buffer(buf: Pointer): Pointer,
	_wasm_device_gray(): Pointer,
	_wasm_device_rgb(): Pointer,
	_wasm_device_bgr(): Pointer,
	_wasm_device_cmyk(): Pointer,
	_wasm_device_lab(): Pointer,
	_wasm_new_icc_colorspace(name: Pointer, buffer: Pointer): Pointer,
	_wasm_new_stroke_state(): Pointer,
	_wasm_new_base14_font(name: Pointer): Pointer,
	_wasm_new_font_from_buffer(name: Pointer, buf: Pointer, subfont: number): Pointer,
	_wasm_encode_character(font: Pointer, unicode: number): number,
	_wasm_advance_glyph(font: Pointer, glyph: number, wmode: number): number,
	_wasm_font_is_monospaced(font: Pointer): number,
	_wasm_font_is_serif(font: Pointer): number,
	_wasm_font_is_bold(font: Pointer): number,
	_wasm_font_is_italic(font: Pointer): number,
	_wasm_new_image_from_pixmap(pix: Pointer, mask: Pointer): Pointer,
	_wasm_new_image_from_buffer(buf: Pointer): Pointer,
	_wasm_get_pixmap_from_image(image: Pointer): Pointer,
	_wasm_new_pixmap_from_page(page: Pointer, ctm: Pointer, colorspace: Pointer, alpha: boolean): Pointer,
	_wasm_new_pixmap_from_page_contents(page: Pointer, ctm: Pointer, colorspace: Pointer, alpha: boolean): Pointer,
	_wasm_pdf_new_pixmap_from_page_with_usage(page: Pointer, ctm: Pointer, colorspace: Pointer, alpha: boolean, usage: Pointer, box: number): Pointer,
	_wasm_pdf_new_pixmap_from_page_contents_with_usage(page: Pointer, ctm: Pointer, colorspace: Pointer, alpha: boolean, usage: Pointer, box: number): Pointer,
	_wasm_new_pixmap_with_bbox(colorspace: Pointer, bbox: Pointer, alpha: boolean): Pointer,
	_wasm_clear_pixmap(pix: Pointer): void,
	_wasm_clear_pixmap_with_value(pix: Pointer, value: number): void,
	_wasm_invert_pixmap(pix: Pointer): void,
	_wasm_invert_pixmap_luminance(pix: Pointer): void,
	_wasm_gamma_pixmap(pix: Pointer, gamma: number): void,
	_wasm_tint_pixmap(pix: Pointer, black_hex_color: number, white_hex_color: number): void,
	_wasm_new_buffer_from_pixmap_as_png(pix: Pointer): Pointer,
	_wasm_new_buffer_from_pixmap_as_pam(pix: Pointer): Pointer,
	_wasm_new_buffer_from_pixmap_as_psd(pix: Pointer): Pointer,
	_wasm_new_buffer_from_pixmap_as_jpeg(pix: Pointer, quality: number, invert_cmyk: boolean): Pointer,
	_wasm_convert_pixmap(pixmap: Pointer, colorspace: Pointer, keep_alpha: boolean): Pointer,
	_wasm_warp_pixmap(pixmap: Pointer, points: Pointer, w: number, h: number): Pointer,
	_wasm_bound_shade(shade: Pointer): Pointer,
	_wasm_new_display_list(mediabox: Pointer): Pointer,
	_wasm_bound_display_list(list: Pointer): Pointer,
	_wasm_run_display_list(display_list: Pointer, dev: Pointer, ctm: Pointer): void,
	_wasm_new_pixmap_from_display_list(display_list: Pointer, ctm: Pointer, colorspace: Pointer, alpha: boolean): Pointer,
	_wasm_new_stext_page_from_display_list(display_list: Pointer, option_string: Pointer): Pointer,
	_wasm_search_display_list(display_list: Pointer, needle: Pointer, marks: Pointer, hits: Pointer, hit_max: number): number,
	_wasm_new_path(): Pointer,
	_wasm_moveto(path: Pointer, x: number, y: number): void,
	_wasm_lineto(path: Pointer, x: number, y: number): void,
	_wasm_curveto(path: Pointer, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void,
	_wasm_curvetov(path: Pointer, x1: number, y1: number, x2: number, y2: number): void,
	_wasm_curvetoy(path: Pointer, x1: number, y1: number, x2: number, y2: number): void,
	_wasm_closepath(path: Pointer): void,
	_wasm_rectto(path: Pointer, x1: number, y1: number, x2: number, y2: number): void,
	_wasm_transform_path(path: Pointer, ctm: Pointer): void,
	_wasm_bound_path(path: Pointer, stroke: Pointer, ctm: Pointer): Pointer,
	_wasm_new_text(): Pointer,
	_wasm_bound_text(text: Pointer, stroke: Pointer, ctm: Pointer): Pointer,
	_wasm_show_glyph(text: Pointer, font: Pointer, trm: Pointer, gid: number, ucs: number, wmode: number): void,
	_wasm_show_string(text: Pointer, font: Pointer, trm: Pointer, string: Pointer, wmode: number): Pointer,
	_wasm_new_draw_device(ctm: Pointer, dest: Pointer): Pointer,
	_wasm_new_display_list_device(list: Pointer): Pointer,
	_wasm_close_device(dev: Pointer): void,
	_wasm_fill_path(dev: Pointer, path: Pointer, evenOdd: boolean, ctm: Pointer, colorspace: Pointer, color: Pointer, alpha: number): void,
	_wasm_stroke_path(dev: Pointer, path: Pointer, stroke: Pointer, ctm: Pointer, colorspace: Pointer, color: Pointer, alpha: number): void,
	_wasm_clip_path(dev: Pointer, path: Pointer, evenOdd: boolean, ctm: Pointer): void,
	_wasm_clip_stroke_path(dev: Pointer, path: Pointer, stroke: Pointer, ctm: Pointer): void,
	_wasm_fill_text(dev: Pointer, text: Pointer, ctm: Pointer, colorspace: Pointer, color: Pointer, alpha: number): void,
	_wasm_stroke_text(dev: Pointer, text: Pointer, stroke: Pointer, ctm: Pointer, colorspace: Pointer, color: Pointer, alpha: number): void,
	_wasm_clip_text(dev: Pointer, text: Pointer, ctm: Pointer): void,
	_wasm_clip_stroke_text(dev: Pointer, text: Pointer, stroke: Pointer, ctm: Pointer): void,
	_wasm_ignore_text(dev: Pointer, text: Pointer, ctm: Pointer): void,
	_wasm_fill_shade(dev: Pointer, shade: Pointer, ctm: Pointer, alpha: number): void,
	_wasm_fill_image(dev: Pointer, image: Pointer, ctm: Pointer, alpha: number): void,
	_wasm_fill_image_mask(dev: Pointer, image: Pointer, ctm: Pointer, colorspace: Pointer, color: Pointer, alpha: number): void,
	_wasm_clip_image_mask(dev: Pointer, image: Pointer, ctm: Pointer): void,
	_wasm_pop_clip(dev: Pointer): void,
	_wasm_begin_mask(dev: Pointer, area: Pointer, luminosity: boolean, colorspace: Pointer, color: Pointer): void,
	_wasm_end_mask(dev: Pointer): void,
	_wasm_begin_group(dev: Pointer, area: Pointer, colorspace: Pointer, isolated: boolean, knockout: boolean, blendmode: number, alpha: number): void,
	_wasm_end_group(dev: Pointer): void,
	_wasm_begin_tile(dev: Pointer, area: Pointer, view: Pointer, xstep: number, ystep: number, ctm: Pointer, id: number): number,
	_wasm_end_tile(dev: Pointer): void,
	_wasm_begin_layer(dev: Pointer, name: Pointer): void,
	_wasm_end_layer(dev: Pointer): void,
	_wasm_new_document_writer_with_buffer(buf: Pointer, format: Pointer, options: Pointer): Pointer,
	_wasm_begin_page(wri: Pointer, mediabox: Pointer): Pointer,
	_wasm_end_page(wri: Pointer): void,
	_wasm_close_document_writer(wri: Pointer): void,
	_wasm_print_stext_page_as_json(page: Pointer, scale: number): Pointer,
	_wasm_search_stext_page(text: Pointer, needle: Pointer, marks: Pointer, hits: Pointer, hit_max: number): number,
	_wasm_open_document_with_buffer(magic: Pointer, buffer: Pointer): Pointer,
	_wasm_open_document_with_stream(magic: Pointer, stream: Pointer): Pointer,
	_wasm_format_link_uri(doc: Pointer, ch: number, pg: number, ty: number, x: number, y: number, w: number, h: number, z: number): Pointer,
	_wasm_needs_password(doc: Pointer): number,
	_wasm_authenticate_password(doc: Pointer, password: Pointer): number,
	_wasm_has_permission(doc: Pointer, perm: number): number,
	_wasm_count_pages(doc: Pointer): number,
	_wasm_load_page(doc: Pointer, number: number): Pointer,
	_wasm_lookup_metadata(doc: Pointer, key: Pointer): Pointer,
	_wasm_set_metadata(doc: Pointer, key: Pointer, value: Pointer): void,
	_wasm_resolve_link(doc: Pointer, uri: Pointer): number,
	_wasm_load_outline(doc: Pointer): Pointer,
	_wasm_outline_get_page(doc: Pointer, outline: Pointer): number,
	_wasm_layout_document(doc: Pointer, w: number, h: number, em: number): void,
	_wasm_link_set_rect(link: Pointer, rect: Pointer): void,
	_wasm_link_set_uri(link: Pointer, uri: Pointer): void,
	_wasm_bound_page(page: Pointer): Pointer,
	_wasm_load_links(page: Pointer): Pointer,
	_wasm_create_link(page: Pointer, bbox: Pointer, uri: Pointer): Pointer,
	_wasm_delete_link(page: Pointer, link: Pointer): void,
	_wasm_run_page(page: Pointer, dev: Pointer, ctm: Pointer): void,
	_wasm_run_page_contents(page: Pointer, dev: Pointer, ctm: Pointer): void,
	_wasm_run_page_annots(page: Pointer, dev: Pointer, ctm: Pointer): void,
	_wasm_run_page_widgets(page: Pointer, dev: Pointer, ctm: Pointer): void,
	_wasm_new_stext_page_from_page(page: Pointer, option_string: Pointer): Pointer,
	_wasm_new_display_list_from_page(page: Pointer): Pointer,
	_wasm_new_display_list_from_page_contents(page: Pointer): Pointer,
	_wasm_page_label(page: Pointer): Pointer,
	_wasm_search_page(page: Pointer, needle: Pointer, marks: Pointer, hits: Pointer, hit_max: number): number,
	_wasm_new_outline_iterator(doc: Pointer): Pointer,
	_wasm_outline_iterator_next(iter: Pointer): number,
	_wasm_outline_iterator_prev(iter: Pointer): number,
	_wasm_outline_iterator_up(iter: Pointer): number,
	_wasm_outline_iterator_down(iter: Pointer): number,
	_wasm_outline_iterator_delete(iter: Pointer): number,
	_wasm_outline_iterator_item(iter: Pointer): Pointer,
	_wasm_outline_iterator_insert(iter: Pointer, title: Pointer, uri: Pointer, is_open: boolean): number,
	_wasm_outline_iterator_update(iter: Pointer, title: Pointer, uri: Pointer, is_open: boolean): void,
	_wasm_pdf_document_from_fz_document(document: Pointer): Pointer,
	_wasm_pdf_page_from_fz_page(page: Pointer): Pointer,
	_wasm_pdf_create_document(): Pointer,
	_wasm_pdf_version(doc: Pointer): number,
	_wasm_pdf_was_repaired(doc: Pointer): number,
	_wasm_pdf_has_unsaved_changes(doc: Pointer): number,
	_wasm_pdf_can_be_saved_incrementally(doc: Pointer): number,
	_wasm_pdf_count_versions(doc: Pointer): number,
	_wasm_pdf_count_unsaved_versions(doc: Pointer): number,
	_wasm_pdf_validate_change_history(doc: Pointer): number,
	_wasm_pdf_enable_journal(doc: Pointer): void,
	_wasm_pdf_undoredo_state_position(doc: Pointer): number,
	_wasm_pdf_undoredo_state_count(doc: Pointer): number,
	_wasm_pdf_undoredo_step(doc: Pointer, step: number): Pointer,
	_wasm_pdf_begin_operation(doc: Pointer, op: Pointer): void,
	_wasm_pdf_begin_implicit_operation(doc: Pointer): void,
	_wasm_pdf_end_operation(doc: Pointer): void,
	_wasm_pdf_abandon_operation(doc: Pointer): void,
	_wasm_pdf_undo(doc: Pointer): void,
	_wasm_pdf_redo(doc: Pointer): void,
	_wasm_pdf_can_undo(doc: Pointer): number,
	_wasm_pdf_can_redo(doc: Pointer): number,
	_wasm_pdf_document_language(doc: Pointer): Pointer,
	_wasm_pdf_set_document_language(doc: Pointer, str: Pointer): void,
	_wasm_pdf_trailer(doc: Pointer): Pointer,
	_wasm_pdf_xref_len(doc: Pointer): number,
	_wasm_pdf_lookup_page_obj(doc: Pointer, index: number): Pointer,
	_wasm_pdf_add_object(doc: Pointer, obj: Pointer): Pointer,
	_wasm_pdf_create_object(doc: Pointer): number,
	_wasm_pdf_delete_object(doc: Pointer, num: number): void,
	_wasm_pdf_add_stream(doc: Pointer, buf: Pointer, obj: Pointer, compress: number): Pointer,
	_wasm_pdf_add_simple_font(doc: Pointer, font: Pointer, encoding: number): Pointer,
	_wasm_pdf_add_cjk_font(doc: Pointer, font: Pointer, ordering: number, wmode: number, serif: boolean): Pointer,
	_wasm_pdf_add_cid_font(doc: Pointer, font: Pointer): Pointer,
	_wasm_pdf_add_image(doc: Pointer, image: Pointer): Pointer,
	_wasm_pdf_load_image(doc: Pointer, ref: Pointer): Pointer,
	_wasm_pdf_add_page(doc: Pointer, mediabox: Pointer, rotate: number, resources: Pointer, contents: Pointer): Pointer,
	_wasm_pdf_insert_page(doc: Pointer, index: number, obj: Pointer): void,
	_wasm_pdf_delete_page(doc: Pointer, index: number): void,
	_wasm_pdf_set_page_labels(doc: Pointer, index: number, style: number, prefix: Pointer, start: number): void,
	_wasm_pdf_delete_page_labels(doc: Pointer, index: number): void,
	_wasm_pdf_is_embedded_file(ref: Pointer): number,
	_wasm_pdf_get_embedded_file_params(ref: Pointer): Pointer,
	_wasm_pdf_add_embedded_file(doc: Pointer, filename: Pointer, mimetype: Pointer, contents: Pointer, created: number, modified: number, checksum: boolean): Pointer,
	_wasm_pdf_load_embedded_file_contents(fs: Pointer): Pointer,
	_wasm_pdf_write_document_buffer(doc: Pointer, options: Pointer): Pointer,
	_wasm_pdf_js_supported(doc: Pointer): number,
	_wasm_pdf_enable_js(doc: Pointer): void,
	_wasm_pdf_disable_js(doc: Pointer): void,
	_wasm_pdf_rearrange_pages(doc: Pointer, n: number, pages: Pointer): void,
	_wasm_pdf_bake_document(doc: Pointer, bake_annots: boolean, bake_widgets: boolean): void,
	_wasm_pdf_page_transform(page: Pointer): Pointer,
	_wasm_pdf_set_page_box(page: Pointer, which: number, rect: Pointer): void,
	_wasm_pdf_first_annot(page: Pointer): Pointer,
	_wasm_pdf_next_annot(annot: Pointer): Pointer,
	_wasm_pdf_first_widget(page: Pointer): Pointer,
	_wasm_pdf_next_widget(annot: Pointer): Pointer,
	_wasm_pdf_create_annot(page: Pointer, type: number): Pointer,
	_wasm_pdf_delete_annot(page: Pointer, annot: Pointer): void,
	_wasm_pdf_update_page(page: Pointer): number,
	_wasm_pdf_redact_page(page: Pointer, black_boxes: number, image_method: number): void,
	_wasm_pdf_new_graft_map(doc: Pointer): Pointer,
	_wasm_pdf_graft_mapped_object(map: Pointer, obj: Pointer): Pointer,
	_wasm_pdf_graft_object(dst: Pointer, obj: Pointer): Pointer,
	_wasm_pdf_graft_mapped_page(map: Pointer, to: number, src: Pointer, from: number): void,
	_wasm_pdf_graft_page(dst: Pointer, to: number, src: Pointer, from: number): void,
	_wasm_pdf_bound_annot(annot: Pointer): Pointer,
	_wasm_pdf_run_annot(annot: Pointer, dev: Pointer, ctm: Pointer): void,
	_wasm_pdf_new_pixmap_from_annot(annot: Pointer, ctm: Pointer, colorspace: Pointer, alpha: boolean): Pointer,
	_wasm_pdf_new_display_list_from_annot(annot: Pointer): Pointer,
	_wasm_pdf_update_annot(annot: Pointer): number,
	_wasm_pdf_annot_obj(annot: Pointer): Pointer,
	_wasm_pdf_annot_type(annot: Pointer): number,
	_wasm_pdf_annot_flags(annot: Pointer): number,
	_wasm_pdf_set_annot_flags(annot: Pointer, v: number): void,
	_wasm_pdf_annot_contents(annot: Pointer): Pointer,
	_wasm_pdf_set_annot_contents(annot: Pointer, v: Pointer): void,
	_wasm_pdf_annot_author(annot: Pointer): Pointer,
	_wasm_pdf_set_annot_author(annot: Pointer, v: Pointer): void,
	_wasm_pdf_annot_creation_date(annot: Pointer): number,
	_wasm_pdf_set_annot_creation_date(annot: Pointer, v: number): void,
	_wasm_pdf_annot_modification_date(annot: Pointer): number,
	_wasm_pdf_set_annot_modification_date(annot: Pointer, v: number): void,
	_wasm_pdf_annot_border_width(annot: Pointer): number,
	_wasm_pdf_set_annot_border_width(annot: Pointer, v: number): void,
	_wasm_pdf_annot_border_style(annot: Pointer): number,
	_wasm_pdf_set_annot_border_style(annot: Pointer, v: number): void,
	_wasm_pdf_annot_border_effect(annot: Pointer): number,
	_wasm_pdf_set_annot_border_effect(annot: Pointer, v: number): void,
	_wasm_pdf_annot_border_effect_intensity(annot: Pointer): number,
	_wasm_pdf_set_annot_border_effect_intensity(annot: Pointer, v: number): void,
	_wasm_pdf_annot_opacity(annot: Pointer): number,
	_wasm_pdf_set_annot_opacity(annot: Pointer, v: number): void,
	_wasm_pdf_annot_filespec(annot: Pointer): Pointer,
	_wasm_pdf_set_annot_filespec(annot: Pointer, v: Pointer): void,
	_wasm_pdf_annot_quadding(annot: Pointer): number,
	_wasm_pdf_set_annot_quadding(annot: Pointer, v: number): void,
	_wasm_pdf_annot_is_open(annot: Pointer): boolean,
	_wasm_pdf_set_annot_is_open(annot: Pointer, v: boolean): void,
	_wasm_pdf_annot_hidden_for_editing(annot: Pointer): boolean,
	_wasm_pdf_set_annot_hidden_for_editing(annot: Pointer, v: boolean): void,
	_wasm_pdf_annot_icon_name(annot: Pointer): Pointer,
	_wasm_pdf_set_annot_icon_name(annot: Pointer, v: Pointer): void,
	_wasm_pdf_annot_rect(annot: Pointer): Pointer,
	_wasm_pdf_annot_popup(annot: Pointer): Pointer,
	_wasm_pdf_annot_quad_point_count(annot: Pointer): number,
	_wasm_pdf_annot_quad_point(annot: Pointer, idx: number): Pointer,
	_wasm_pdf_annot_vertex_count(annot: Pointer): number,
	_wasm_pdf_annot_vertex(annot: Pointer, idx: number): Pointer,
	_wasm_pdf_annot_ink_list_count(annot: Pointer): number,
	_wasm_pdf_annot_ink_list_stroke_count(annot: Pointer, idx: number): number,
	_wasm_pdf_annot_ink_list_stroke_vertex(annot: Pointer, a: number, b: number): Pointer,
	_wasm_pdf_annot_border_dash_count(annot: Pointer): number,
	_wasm_pdf_annot_border_dash_item(annot: Pointer, idx: number): number,
	_wasm_pdf_annot_has_rect(annot: Pointer): number,
	_wasm_pdf_annot_has_ink_list(annot: Pointer): number,
	_wasm_pdf_annot_has_quad_points(annot: Pointer): number,
	_wasm_pdf_annot_has_vertices(annot: Pointer): number,
	_wasm_pdf_annot_has_line(annot: Pointer): number,
	_wasm_pdf_annot_has_interior_color(annot: Pointer): number,
	_wasm_pdf_annot_has_line_ending_styles(annot: Pointer): number,
	_wasm_pdf_annot_has_border(annot: Pointer): number,
	_wasm_pdf_annot_has_border_effect(annot: Pointer): number,
	_wasm_pdf_annot_has_icon_name(annot: Pointer): number,
	_wasm_pdf_annot_has_open(annot: Pointer): number,
	_wasm_pdf_annot_has_author(annot: Pointer): number,
	_wasm_pdf_annot_has_filespec(annot: Pointer): number,
	_wasm_pdf_annot_language(doc: Pointer): Pointer,
	_wasm_pdf_set_annot_language(doc: Pointer, str: Pointer): void,
	_wasm_pdf_set_annot_popup(annot: Pointer, rect: Pointer): void,
	_wasm_pdf_set_annot_rect(annot: Pointer, rect: Pointer): void,
	_wasm_pdf_clear_annot_quad_points(annot: Pointer): void,
	_wasm_pdf_clear_annot_vertices(annot: Pointer): void,
	_wasm_pdf_clear_annot_ink_list(annot: Pointer): void,
	_wasm_pdf_clear_annot_border_dash(annot: Pointer): void,
	_wasm_pdf_add_annot_quad_point(annot: Pointer, quad: Pointer): void,
	_wasm_pdf_add_annot_vertex(annot: Pointer, point: Pointer): void,
	_wasm_pdf_add_annot_ink_list_stroke(annot: Pointer): void,
	_wasm_pdf_add_annot_ink_list_stroke_vertex(annot: Pointer, point: Pointer): void,
	_wasm_pdf_add_annot_border_dash_item(annot: Pointer, v: number): void,
	_wasm_pdf_annot_line_ending_styles_start(annot: Pointer): number,
	_wasm_pdf_annot_line_1(annot: Pointer): Pointer,
	_wasm_pdf_annot_line_2(annot: Pointer): Pointer,
	_wasm_pdf_set_annot_line(annot: Pointer, a: Pointer, b: Pointer): void,
	_wasm_pdf_annot_line_ending_styles_end(annot: Pointer): number,
	_wasm_pdf_set_annot_line_ending_styles(annot: Pointer, start: number, end: number): void,
	_wasm_pdf_annot_color(annot: Pointer, color: Pointer): number,
	_wasm_pdf_annot_interior_color(annot: Pointer, color: Pointer): number,
	_wasm_pdf_set_annot_color(annot: Pointer, n: number, color: Pointer): void,
	_wasm_pdf_set_annot_interior_color(annot: Pointer, n: number, color: Pointer): void,
	_wasm_pdf_set_annot_default_appearance(annot: Pointer, font: Pointer, size: number, ncolor: number, color: Pointer): void,
	_wasm_pdf_annot_default_appearance_font(annot: Pointer): Pointer,
	_wasm_pdf_annot_default_appearance_size(annot: Pointer): number,
	_wasm_pdf_annot_default_appearance_color(annot: Pointer, color: Pointer): number,
	_wasm_pdf_set_annot_appearance_from_display_list(annot: Pointer, appearance: Pointer, state: Pointer, ctm: Pointer, list: Pointer): void,
	_wasm_pdf_set_annot_appearance(annot: Pointer, appearance: Pointer, state: Pointer, ctm: Pointer, bbox: Pointer, resources: Pointer, contents: Pointer): void,
	_wasm_pdf_apply_redaction(annot: Pointer, black_boxes: number, image_method: number): void,
	_wasm_pdf_annot_field_type(widget: Pointer): number,
	_wasm_pdf_annot_field_flags(widget: Pointer): number,
	_wasm_pdf_annot_field_label(annot: Pointer): Pointer,
	_wasm_pdf_annot_field_value(annot: Pointer): Pointer,
	_wasm_pdf_load_field_name(widget: Pointer): Pointer,
	_wasm_pdf_annot_text_widget_max_len(widget: Pointer): number,
	_wasm_pdf_set_annot_text_field_value(widget: Pointer, value: Pointer): number,
	_wasm_pdf_set_annot_choice_field_value(widget: Pointer, value: Pointer): number,
	_wasm_pdf_annot_choice_field_option_count(widget: Pointer): number,
	_wasm_pdf_annot_choice_field_option(widget: Pointer, is_export: boolean, i: number): Pointer,
	_wasm_pdf_toggle_widget(widget: Pointer): number,
	_wasm_pdf_is_indirect(obj: Pointer): number,
	_wasm_pdf_is_bool(obj: Pointer): number,
	_wasm_pdf_is_int(obj: Pointer): number,
	_wasm_pdf_is_number(obj: Pointer): number,
	_wasm_pdf_is_name(obj: Pointer): number,
	_wasm_pdf_is_string(obj: Pointer): number,
	_wasm_pdf_is_array(obj: Pointer): number,
	_wasm_pdf_is_dict(obj: Pointer): number,
	_wasm_pdf_is_stream(obj: Pointer): number,
	_wasm_pdf_to_num(obj: Pointer): number,
	_wasm_pdf_to_bool(obj: Pointer): number,
	_wasm_pdf_to_real(obj: Pointer): number,
	_wasm_pdf_to_name(obj: Pointer): Pointer,
	_wasm_pdf_to_text_string(obj: Pointer): Pointer,
	_wasm_pdf_new_indirect(doc: Pointer, num: number): Pointer,
	_wasm_pdf_new_array(doc: Pointer, cap: number): Pointer,
	_wasm_pdf_new_dict(doc: Pointer, cap: number): Pointer,
	_wasm_pdf_new_bool(v: boolean): Pointer,
	_wasm_pdf_new_int(v: number): Pointer,
	_wasm_pdf_new_real(v: number): Pointer,
	_wasm_pdf_new_name(v: Pointer): Pointer,
	_wasm_pdf_new_text_string(v: Pointer): Pointer,
	_wasm_pdf_new_string(ptr: Pointer, len: number): Pointer,
	_wasm_pdf_resolve_indirect(obj: Pointer): Pointer,
	_wasm_pdf_array_len(obj: Pointer): Pointer,
	_wasm_pdf_array_get(obj: Pointer, idx: number): Pointer,
	_wasm_pdf_dict_get(obj: Pointer, key: Pointer): Pointer,
	_wasm_pdf_dict_len(obj: Pointer): Pointer,
	_wasm_pdf_dict_get_key(obj: Pointer, idx: number): Pointer,
	_wasm_pdf_dict_get_val(obj: Pointer, idx: number): Pointer,
	_wasm_pdf_dict_get_inheritable(obj: Pointer, key: Pointer): Pointer,
	_wasm_pdf_dict_gets(obj: Pointer, key: Pointer): Pointer,
	_wasm_pdf_dict_gets_inheritable(obj: Pointer, key: Pointer): Pointer,
	_wasm_pdf_dict_put(obj: Pointer, key: Pointer, val: Pointer): void,
	_wasm_pdf_dict_puts(obj: Pointer, key: Pointer, val: Pointer): void,
	_wasm_pdf_dict_del(obj: Pointer, key: Pointer): void,
	_wasm_pdf_dict_dels(obj: Pointer, key: Pointer): void,
	_wasm_pdf_array_put(obj: Pointer, key: number, val: Pointer): void,
	_wasm_pdf_array_push(obj: Pointer, val: Pointer): void,
	_wasm_pdf_array_delete(obj: Pointer, key: number): void,
	_wasm_pdf_sprint_obj(obj: Pointer, tight: boolean, ascii: boolean): Pointer,
	_wasm_pdf_load_stream(obj: Pointer): Pointer,
	_wasm_pdf_load_raw_stream(obj: Pointer): Pointer,
	_wasm_pdf_update_object(doc: Pointer, num: number, obj: Pointer): void,
	_wasm_pdf_update_stream(doc: Pointer, ref: Pointer, buf: Pointer, raw: number): void,
	_wasm_pdf_to_string(obj: Pointer, size: Pointer): Pointer,
	_wasm_on_data_fetched(state: Pointer, block: number, data: Pointer, size: number): void,
	_wasm_open_stream_from_url(url: Pointer, content_length: number, block_size: number, prefetch: number): Pointer,
	_wasm_trim_pdf_page(doc: Pointer, page: Pointer, x0: number, y0: number, x1: number, y1: number): void,
}
