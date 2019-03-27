resource "aws_lambda_function" "cloudfront_lambda" {
  provider         = "aws.certs"
  function_name    = "portfolio-edge-router"
  filename         = "${local.edge_lambda_file}"
  role             = "${aws_iam_role.iam_for_lambda.arn}"
  handler          = "lambda.handler"
  runtime          = "nodejs8.10"
  source_code_hash = "${base64sha256(file(local.edge_lambda_file))}"
  publish          = "true"
}

resource "aws_iam_role" "iam_for_lambda" {
  name = "iam_for_lambda"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": [
          "lambda.amazonaws.com",
          "edgelambda.amazonaws.com"
        ]
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "lambda_basic_execution" {
  name = "lambda_basic_execution"
  role = "${aws_iam_role.iam_for_lambda.id}"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "logs:CreateLogGroup",
        "logs:CreateLogStream",
        "logs:PutLogEvents"
      ],
      "Resource": "*"
    }
  ]
}
EOF
}