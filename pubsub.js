var pubsub = (function() {
	var topics = {};

	return {
		publish: function(eventName, data) {
			if(!(topics[eventName])) {
				return;
			}
			var len = topics[eventName].length;
			while (len--) {
				topics[eventName][len](data)
			}
		},
		subscriber: function(eventName, callback) {
			if(topics[eventName]) {
				topics[eventName].push(callback);
			} else {
				topics[eventName] = [callback];
			}
		}
	}

})();


console.log(':::::');

pubsub.subscriber('page-load', function(data) {
	console.log('It is published and i was subscriber', data);
});

pubsub.subscriber('page-load', function() {
	console.log('It is published and i was subscriber 2', data);
});

pubsub.subscriber('page-unload', function() {
	console.log('It is published and i was subscriber', data);
});

pubsub.subscriber('page-unload', function() {
	console.log('It is published and i was subscriber', data);
});

pubsub.publish('page-load', 'There is a change');

pubsub.publish('page-unload', 'There is a change in unload');

