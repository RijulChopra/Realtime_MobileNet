function setup()
{
    canvas = createCanvas(200, 200);
    canvas.center();
    video = createCapture
    ({
        audio:false,
        video:
        {
            facingMode:
            {
                exact:'environment'
            }
        }
    });
    video.hide();
    classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function draw()
{
    image(video, 0, 0, width, height);
    classifier.classify(video, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        name_var = results[0].label;
        acc_var = results[0].confidence*100;
        console.log(results);
        console.log("Maximum % - " + name_var);
        document.getElementById("result_object_name").innerHTML = name_var;
        document.getElementById("result_object_accuracy").innerHTML = acc_var.toFixed(0) + "%";
    }
}