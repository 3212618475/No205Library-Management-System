$(function() {

$("#contents").blur(
		function() {
			$("#contents_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#contents").after("<span id='contents_msg' style='color: red'>内容不能为空</span>");
			}
	});

$("#status").blur(
		function() {
			$("#status_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#status").after("<span id='status_msg' style='color: red'>状态不能为空</span>");
			}
	});

$("#reps").blur(
		function() {
			$("#reps_msg").empty();
			var name = $(this).val();
			if (name == "" || name == null) {
				$("#reps").after("<span id='reps_msg' style='color: red'>管理员回复不能为空</span>");
			}
	});







$('#sub').click(function(){
var contents = $("#contents").val();
var status = $("#status").val();
var reps = $("#reps").val();
$("#contents_msg").empty();
$("#status_msg").empty();
$("#reps_msg").empty();
if (contents == "" || contents == null) {
	$("#contents").after("<span id='contents_msg' style='color: red'>内容不能为空</span>");
	return false;
}
if (status == "" || status == null) {
	$("#status").after("<span id='status_msg' style='color: red'>状态不能为空</span>");
	return false;
}
if (reps == "" || reps == null) {
	$("#reps").after("<span id='reps_msg' style='color: red'>管理员回复不能为空</span>");
	return false;
}
});
$('#res').click(function() {
$("#contents_msg").empty();
$("#status_msg").empty();
$("#reps_msg").empty();
});

});
